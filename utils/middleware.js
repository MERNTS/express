const logger = require('./logger');
const {request} = require("express");

const requestLogger = (req, res, next)=>{
    logger.info('method:', request.method);
    // logger.info('path:', request.path);
    logger.info('Body:', request.body);
    logger.info('==================');
    next()
}

const unknownEndpoint = (req, res)=>{
    res.status(404).send('Not Found');
}

const errorHandler = (err, req, res, next)=>{
    logger.error(err.message);
    if (err.name === 'CastError') {
        return res.status(400).send({ error: 'malformatted id' })
    } else if (err.name === 'ValidationError') {
        return res.status(400).json({ error: err.message })
    }    next (err)
}

module.exports = {
    requestLogger,
    unknownEndpoint,
    errorHandler,
}