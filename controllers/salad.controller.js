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
        if(salad) {
            res.status(200).send(salad);
        } else {
            res.status(400).send('There is not the salad with this id');
        }
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
        const updated = await Salad.findByIdAndUpdate(saladId, body, {returnDocument: 'after'});
        if(updated) {
            res.status(200).send(updated);
        } else {
            res.status(400).send('There is not the salad with this id');
        }
    } catch (error) {
        next(error);
    }
};

module.exports.deleteSalad = async (req, res, next) => {
    try {
        const { params: { saladId } } = req;
        const deleted = await Salad.findByIdAndDelete(saladId);
        if(deleted) {
            res.status(200).send(/*'Salad was successfully deleted'*/deleted);
        } else {
            res.status(400).send('There is not the salad with this id');
        }
    } catch (error) {
        next(error);
    }
};