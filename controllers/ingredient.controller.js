const { Ingredient } = require('../model');

module.exports.addIngredient = async(req, res, next) => {
    try {
        const { body } = req;
        const ingredient = await Ingredient.create(body);
        res.status(201).send(ingredient);
    } catch (error) {
        next(error);
    }
};

module.exports.getAllIngredients = async(req, res, next) => {
    try {
        const result = await Ingredient.find({});
        return res.status(200).send(result);
    } catch (error) {
        next(error);
    }
};