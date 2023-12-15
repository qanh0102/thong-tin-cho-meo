// Import để tương tác với model
const Cats = require('../models/Cat'); // Liên kết với model
const Dogs = require('../models/Dog')
const mutipleMongooseToObject = require('../../util/mongoose');

class MeController {
    
    //[get] / me/stored/cats
    storedCats(req,res, next) {
        Cats.find({deletedAt: null})
        .then(cats => res.render('me/storedCats', {
            Cats: mutipleMongooseToObject.multipleMongooseToObject(cats)
        }))
        .catch(next)
    }

    //[get] / me/stored/dogs
    storedDogs(req,res, next) {
        Dogs.find({deletedAt: null})
        .then(dogs => res.render('me/storedDogs', {
            Dogs: mutipleMongooseToObject.multipleMongooseToObject(dogs)
        }))
        .catch(next)
    }
    
}

module.exports = new MeController;
