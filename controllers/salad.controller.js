const { Salad } = require('../model');

module.exports.createSalad = async (req, res, next) => {
    try {
        const { body } = req;
        const salad = await Salad.create(body);
        res.status(201).send(salad);
    } catch (error) {
        next(error);
    }
};

module.exports.getSalad = async (req, res, next) => {
    try {
        const { params: { saladId } } = req;
        const salad = await Salad.findById(saladId);
        res.status(200).send(salad);
    } catch (error) {
        next(error);
    }
};

module.exports.getAllSalads = async (req, res, next) => {
    try {
        const salads = await Salad.find();
        res.status(200).send(salads);
    } catch (error) {
        next(error);
    }
};

module.exports.updateSalade = async (req, res, next) => {
    try {
        const { body, params: { saladId } } = req;
        const result = await Salad.findByIdAndUpdate(saladId, body, {returnDocument: 'after'});
        res.status(200).send(result);
    } catch (error) {
        next(error);
    }
};

module.exports.deleteSalad = async (req, res, next) => {
    try {
        const { params: { saladId } } = req;
        const result = await Salad.findByIdAndDelete(saladId);
        console.log(result)
        res.status(200).send('Salad was successfully deleted');
    } catch (error) {
        next(error);
    }
};