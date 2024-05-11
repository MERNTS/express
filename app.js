const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const codesRouter = require('./routes/routes');
const middleware = require('./utils/middleware');
const logger = require('./utils/logger');
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
logger.info('MongoDB connection started');
mongoose.connect(process.env.MONGODB_URI)
    .then(result => {
        console.log('connected to MongoDB')
    })
    .catch(error => {
        console.log('error connecting to MongoDB:', error.message)
    })

app.use(express.json());
app.use(express.static('dist'));
app.use(middleware.requestLogger)

app.use('/api/codes', codesRouter)
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app