const express = require('express');

require('./models')

const errorHandler = require('./middleware/errorHandler');
const categoryRoutes = require('./routes/CategoryRoutes');
const productRoutes = require('./routes/ProductRoutes');
const userRoutes = require('./routes/UserRoutes')


const app = express();

app.use(express.json());

app.use('/categories', categoryRoutes);
app.use('/products', productRoutes);
app.use('/users', userRoutes);

app.use(errorHandler);

module.exports = app;
