const responseHandler = (data, res, message, status) => {
    const statusCode = status || 200;
    res.status(statusCode).json({
        status: statusCode || 200,
        message: message || 'Success',
        data: data
    })
}
const clientHandler = (message, status, res) => {
    const statusCode = status || 400;
    res.status(statusCode).json({
        status: statusCode || 400,
        message: message || 'Failure',
        data: null
    })
}

const errorHandler = (status, res, message,data) => {
    const statusCode = status || 500;
    res.status(statusCode).json({
        status: statusCode,
        message: message || `Error`,
        data: data
    })
}

module.exports = {
    responseHandler,
    clientHandler,
    errorHandler
}
