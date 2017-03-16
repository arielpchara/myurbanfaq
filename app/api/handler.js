function jsonModel(url, data) {
    return Object.assign({ url }, data);
}

module.exports = (request, response) => {
    function successHandle(data) {
        response.json(jsonModel(request.fullUrl, {
            data,
            success: true
        }));
    }

    function errorHandle(error) {
        console.error(error);
        response.json(jsonModel(request.fullUrl, {
            error,
            success: false
        }));
    }
    return {
        successHandle,
        errorHandle
    };
};