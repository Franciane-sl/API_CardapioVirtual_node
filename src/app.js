const express = require('express');
const sequelize = require('./config/database');
require('./models')

const errorHandler = require('./middleware/errorHandler');

const categoryRoutes = require('./routes/CategoryRoutes')

const app = express();

app.use(express.json());

app.use('/categories', categoryRoutes)

sequelize.authenticate()
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch(err => {
    console.error('Unable to connect to database:', err);
  });

  app.use(errorHandler);

module.exports = app;
