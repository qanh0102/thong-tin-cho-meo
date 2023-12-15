// Import để tương tác với model
const Dog = require('../models/Dog'); // Liên kết với model
const mongooseToObject = require('../../util/mongoose');

class DogController {
    
    //show ra slug
    // [GET] /dog/:slug
    show(req,res,next){
       Dog.findOne({ slug: req.params.slug }) //Cat o day la model
            .then(dog => {
                res.render('dogs/dog', {
                    Dog: mongooseToObject.mongooseToObject(dog)});
            })
            .catch(next);
    }

    // [GET] /dog/create
    create(req,res,next){
        res.render('dogs/create')
    }

     // [POST] /dog/store
    store(req,res,next){
        //luu du lieu len database
        const dog = new Dog(req.body);
        dog.save()
            .then(() => res.redirect('/dogs'))
            .catch(next)
    }

    // [GET] /dog/:id/edit
    edit(req,res,next){
        Dog.findById(req.params.id)
        .then(dog => {
            res.render('dogs/edit', {
                Dog: mongooseToObject.mongooseToObject(dog)});
        })
        .catch(next);
    }

    //update du lieu len data base
    //[PUT] / dog /:id
    update(req,res,next){
        Dog.updateOne({ _id: req.params.id } ,req.body)
            .then(() => res.redirect('/me/stored/dogs'))
            .catch(next);
    }

    //xoa du lieu 
    //[DELETE]/cat/:id
    delete(req, res, next) {
        Dog.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

}

module.exports = new DogController;
