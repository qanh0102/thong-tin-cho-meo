// Import để tương tác với model
const Cat = require('../models/Cat'); // Liên kết với model
const mongooseToObject = require('../../util/mongoose');

class CatController {
    
    //show ra slug
    // [GET] /cat/:slug
    show(req,res,next){
       Cat.findOne({ slug: req.params.slug }) //Cat o day la model
            .then(cat => {
                res.render('cats/cat', {
                    Cat: mongooseToObject.mongooseToObject(cat)});
            })
            .catch(next);
    }

    // [GET] /cat/create
    create(req,res,next){
        res.render('cats/create')
    }

     // [POST] /cat/store
    store(req,res,next){
        //luu du lieu len database
        const cat = new Cat(req.body);
        cat.save()
            .then(() => res.redirect('/cats'))
            .catch(next)
    }

    // [GET] /cat/:id/edit
    edit(req,res,next){
        Cat.findById(req.params.id)
        .then(cat => {
            res.render('cats/edit', {
                Cat: mongooseToObject.mongooseToObject(cat)});
        })
        .catch(next);
    }

    //update du lieu len data base
    //[PUT] / cat /:id
    update(req,res,next){
        Cat.updateOne({ _id: req.params.id } ,req.body)
            .then(() => res.redirect('/me/stored/cats'))
            .catch(next);
    }

    //xoa du lieu 
    //[DELETE]/cat/:id
    delete(req, res, next) {
        Cat.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new CatController;
