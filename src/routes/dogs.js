const express = require('express')
const router = express.Router();

const dogsController = require('../app/Controllers/DogsController')

router.get('/', dogsController.index);

module.exports = router;