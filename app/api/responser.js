module.exports = (req, response) => {
    return Object.assign({
        url: req.protocol + '://' + req.get('host') + req.originalUrl,
    }, response);
}