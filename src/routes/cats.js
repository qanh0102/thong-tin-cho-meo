const express = require('express')
const router = express.Router();

const catsController = require('../app/Controllers/CatsController')

router.get('/', catsController.index);

module.exports = router;