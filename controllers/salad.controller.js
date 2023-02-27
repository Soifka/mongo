const { Salad } = require('../model');

module.exports.createSalad = async (req, res, next) => {
    try {
        const { body, ingredients } = req;
        const salad = await Salad.create({...body, ingredients});
        return res.status(201).send(salad);
    } catch (error) {
        next(error);
    }
};

module.exports.getSalad = async (req, res, next) => {
    try {
        const { params: { saladId } } = req;
        const salad = await Salad.findById(saladId)
                                    .populate('ingredients');
        return res.status(200).send(salad);
        
        // const salad = await Salad.findById(saladId);
        // if(salad) {
        //     return res.status(200).send(salad);
        // } else {
        //     return res.status(400).send('There is not the salad with this id');
        // }

    } catch (error) {
        next(error);
    }
};

module.exports.getAllSalads = async (req, res, next) => {
    try {
        const salads = await Salad.find({})
                                    .populate('ingredients');
        return res.status(200).send(salads);
        
        // const salads = await Salad.find({});
        // return res.status(200).send(salads);
    } catch (error) {
        next(error);
    }
};

module.exports.updateSalade = async (req, res, next) => {
    try {
        const { body, params: { saladId } } = req;
        const updated = await Salad.findByIdAndUpdate(saladId, body, {returnDocument: 'after'});
        if(updated) {
            return res.status(200).send(updated);
        } else {
            return res.status(400).send('There is not the salad with this id');
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
            return res.status(200).send(/*'Salad was successfully deleted'*/deleted);
        } else {
            return res.status(400).send('There is not the salad with this id');
        }
    } catch (error) {
        next(error);
    }
};