const mocha = require('mocha'),
    chai = require('chai'),
    chaiHttp = require('chai-http'),
    sha256 = require('sha256');

const expect = chai.expect;

chai.use(chaiHttp);

const chaiReq = chai.request(`http://localhost:${process.env.PORT}`);

function errorHandle(done) {
    return function(err) {
        done(err);
    }
}

var rootAccessToken = null;

describe('User', () => {

    before(done => {
        User.remove({}).then(() => done()).catch(errorHandle(done));
    });

    const userController = require('./user.controller'),
        User = require('./user.model');

    const userDefault = {
        email: 'teste@email.com',
        password: '123455435'
    };
    const userRoot = {
        email: 'root@root.x',
        password: 'root',
        admin: true
    };


    describe('Model', () => {
        it('should be not root user exist', done => {
            User.findOne({
                email: userRoot.email
            }).then(user => {
                expect(user).to.be.null;
                done()
            }).catch(errorHandle(done))
        })

        it('should be create a root user', done => {
            const newUser = new User(userRoot);
            newUser.save().then(saved => {
                expect(saved.email).to.equal(userRoot.email);
                expect(saved.password).to.equal(sha256(userRoot.password));
                done()
            }).catch(errorHandle(done))
        })

        it('should be not duplicate user', done => {
            const newUser = new User(userRoot);
            newUser.save().then(saved => {
                expect(saved.email).to.not.equal(userRoot.email);
            }).catch(err => done())
        })

        it('should be has root user', () => {
            User.findOne({
                email: userRoot.email
            }).then(user => {
                expect(user).to.be.not.null;
            });
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

        it('should be have token', done => {
            expect(rootAccessToken).to.exists;
            done()
        });
        let userCreated;
        it('should be create new user', done => {
            chaiReq.post('/api/v1/user')
                .set('x-access-token', rootAccessToken)
                .send(userDefault)
                .end((err, res) => {
                    if (res.body) userCreated = res.body;
                    expect(res.body.email).to.equal(userDefault.email);
                    done();
                });
        });
        it('should be set admin user', done => {
            chaiReq.put(`/api/v1/user/${userCreated._id}`)
                .set('x-access-token', rootAccessToken)
                .send({
                    admin: true
                })
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    done(err);
                });
        });
        it('should be admin user', done => {
            chaiReq.get(`/api/v1/user/${userCreated._id}`)
                .set('x-access-token', rootAccessToken)
                .end((err, res) => {
                    if (res.body) userCreated = res.body;
                    expect(res.body.admin).to.be.true;
                    done(err);
                });
        });
    });
});