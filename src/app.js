const express = require('express');

require('./models')

const errorHandler = require('./middleware/errorHandler');
const categoryRoutes = require('./routes/CategoryRoutes');
const productRoutes = require('./routes/ProductRoutes')

const app = express();

app.use(express.json());

app.use('/categories', categoryRoutes);
app.use('/products', productRoutes);

app.use(errorHandler);

module.exports = app;
