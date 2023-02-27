const { Router } = require('express');
const SaladController = require('../controllers/salad.controller');
const { getIngredients } = require('../middlewares/getIngredients');

const saladRouter = Router();

saladRouter.post('/', getIngredients, SaladController.createSalad);
saladRouter.get('/', SaladController.getAllSalads);
saladRouter.get('/:saladId', SaladController.getSalad);
saladRouter.patch('/:saladId', SaladController.updateSalade);
saladRouter.delete('/:saladId', SaladController.deleteSalad);

module.exports = saladRouter;