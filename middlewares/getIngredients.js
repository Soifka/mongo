const { Ingredient } = require('../model');

module.exports.getIngredients = async (req, res, next) => {
    try {
        const { body: {ingredients} } = req;
        const ingrArr = [];

        for(let i = 0; i < ingredients.length; i++) {
            const ingr = await Ingredient.findOne({
                name: ingredients[i]
            })
            if(ingr) {
                ingrArr.push(ingr._id); //ingr['_id']
            } else {
                throw new Error('Ingredient not found')
            }
        }
        //console.log(ingrArr)
        req.ingredients = ingrArr;
        next();
    } catch (error) {
        next(error);
    }
};