const express = require('express');
const sequelize = require('./config/database');

const app = express();

app.use(express.json());

sequelize.authenticate()
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch(err => {
    console.error('Unable to connect to database:', err);
  });

module.exports = app;
