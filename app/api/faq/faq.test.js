const mocha = require('mocha'),
    chai = require('chai'),
    chaiHttp = require('chai-http'),
    chaiHtml = require('chai-html'),
    fs = require('fs'),
    path = require('path'),
    sha256 = require('sha256');

const expect = chai.expect;

chai.use(chaiHttp);
chai.use(chaiHtml);

const chaiReq = chai.request(`http://localhost:${process.env.PORT}`);

function errorHandle(done) {
    return function(err) {
        done(err);
    }
}

describe('FAQ', () => {

    const faqController = require('./faq.controller'),
        Faq = require('./faq.model');

    const faqDefault = {
        title: 'Titulo Um',
        content: '<img src="/img/teste"/> Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    };
    const userRoot = {
        email: 'root@root.x',
        password: 'root',
        admin: true
    };

    let faqSaved, allFaqsCreated;


    before(done => {
        Faq.remove({})
            .then(() => {
                /// Cria dados mocados para testes a partir do 
                return Faq.create(require('../../../test/faqs.mock'))
            })
            .then((faqs) => {
                allFaqsCreated = faqs;
                done();
            })
            .catch(errorHandle(done));
    });

    describe('Model', () => {

        it('should be create a new faq', done => {
            const newFaq = new Faq(faqDefault);
            newFaq.save().then(saved => {
                if (saved) faqSaved = saved;
                expect(saved.title).to.equal(faqDefault.title);
                done();
            }).catch(errorHandle(done));
        });

        it('should be updade default faq', done => {
            Faq.findById(faqSaved._id)
                .then(faq => {
                    faq.title = "Tutulo Um (updated)";
                    faq.save().then(saved => {
                        expect(saved.title).to.contain("updated");
                        done();
                    });
                }).catch(errorHandle(done));
        });

        it('should be confirm updade', done => {
            Faq.findById(faqSaved._id)
                .then(faq => {
                    expect(faq.title).to.contain("updated");
                    done();
                }).catch(errorHandle(done));
        });

        it('should be have contet img tag', done => {
            Faq.findById(faqSaved._id)
                .then(faq => {
                    expect(faq.content).to.contain("<img");
                    done();
                }).catch(errorHandle(done));
        });

        it('should be delete the faq', done => {
            Faq.remove({ _id: faqSaved._id })
                .then(removed => {
                    expect(removed.result.n > 0).to.equal(true);
                    done();
                }).catch(errorHandle(done));
        });
    });
    describe('Controller', () => {
        it('authenticate root user', done => {
            chaiReq.post('/api/v1/user/authenticate')
                .send(userRoot)
                .end((err, res) => {
                    if (res.body.token) {
                        rootAccessToken = res.body.token;
                    }
                    expect(res.body.success).to.equal(true);
                    expect(res.body.token).to.exists;
                    done();
                });
        });
        it('should return all faqs', done => {
            chaiReq.get('/api/v1/faq')
                .end((err, res) => {
                    expect(res.body.data).to.be.not.empty;
                    done();
                });
        });
        it('should return published faqs', done => {
            chaiReq.get('/api/v1/faq/published')
                .end((err, res) => {
                    expect(res.body.data).to.be.not.empty;
                    done();
                });
        });
        it('should get faq by id', done => {
            chaiReq.get(`/api/v1/faq/${allFaqsCreated[0]._id}`)
                .end((err, res) => {
                    expect(res.body.success).to.be.true;
                    const faq = allFaqsCreated[0];
                    expect(faq.title).to.equal(res.body.data.title);
                    done();
                });
        });

        it('should create new faq using token', done => {
            chaiReq.post(`/api/v1/faq`)
                .set('x-access-token', rootAccessToken)
                .send(faqDefault)
                .end((err, res) => {
                    expect(res.body.data.title).to.equal(faqDefault.title);
                    faqSaved = res.body.data;
                    done();
                });
        });

        it('should update faq', done => {
            chaiReq.put(`/api/v1/faq/${faqSaved._id}`)
                .set('x-access-token', rootAccessToken)
                .send({ title: faqDefault.title + ' (edited)' })
                .end((err, res) => {
                    done();
                });
        });

        it('should update confirm', done => {
            chaiReq.get(`/api/v1/faq/${faqSaved._id}`)
                .end((err, res) => {
                    expect(res.body.data.title).to.contain('edited');
                    done();
                });
        });

    });
});