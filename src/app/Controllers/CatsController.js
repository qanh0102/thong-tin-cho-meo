// Import để tương tác với model
const Cats = require('../models/Cat'); // Liên kết với model
const mutipleMongooseToObject = require('../../util/mongoose');

class CatsController {
    
    // [GET] /cats
    index(req, res, next) {
        // Sử dụng Mongoose để lấy tất cả các tin tức từ cơ sở dữ liệu
        Cats.find({}) // Sử dụng phương thức Promises
            .then(cats => {
                // Trả về dữ liệu và render view 'Cats'
                res.render('cats', {
                    Cats: mutipleMongooseToObject.multipleMongooseToObject(cats)
                });
            })
            .catch(next); // Chuyển lỗi đến middleware xử lý lỗi nếu có lỗi
    }
}

module.exports = new CatsController;
