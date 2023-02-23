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

module.exports.getSalad = () => {

};

module.exports.getAllSalads = () => {

};

module.exports.updateSalade = () => {

};

module.exports.deleteSalad = () => {

};