// Import để tương tác với model
const Dogs = require('../models/Dog'); // Liên kết với model
const mutipleMongooseToObject = require('../../util/mongoose');

class DogsController {
    
    // [GET] /dogs
    index(req, res, next) {
        // Sử dụng Mongoose để lấy tất cả các tin tức từ cơ sở dữ liệu
        Dogs.find({}) // Sử dụng phương thức Promises
            .then(dogs => {
                // Trả về dữ liệu và render view 'Cats'
                res.render('dogs', {
                    Dogs: mutipleMongooseToObject.multipleMongooseToObject(dogs)
                });
            })
            .catch(next); // Chuyển lỗi đến middleware xử lý lỗi nếu có lỗi
    }
}

module.exports = new DogsController;
