const express = require('express');
const app = express();
const SaladController = require('./controllers/salad.controller');
const { errorHandler } = require('./errorHandler');

app.use(express.json());

app.post('/', SaladController.createSalad);
app.get('/', SaladController.getAllSalads);
app.get('/:saladId', SaladController.getSalad);
app.patch('/:saladId');
app.delete('/:saladId', SaladController.deleteSalad);

app.use(errorHandler);

module.exports = app;
