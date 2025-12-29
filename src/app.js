const express = require('express');

require('./models')

const errorHandler = require('./middleware/errorHandler');
const categoryRoutes = require('./routes/CategoryRoutes')

const app = express();

app.use(express.json());

app.use('/categories', categoryRoutes)

app.use(errorHandler);

module.exports = app;
