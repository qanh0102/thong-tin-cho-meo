const express = require('express')
const router = express.Router();

const meController = require('../app/Controllers/MeController')

router.get('/stored/cats', meController.storedCats);
router.get('/stored/dogs', meController.storedDogs);

module.exports = router;