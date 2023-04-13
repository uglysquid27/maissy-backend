exports.sucess = (res, data, code) => {
    return res.status(code).json(data);
}

exports.error = (res, message, code) => {
    return res.status(code).json({
        error : message
    });
}