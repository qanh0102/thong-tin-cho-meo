const express = require('express')
const router = express.Router();

const dogController = require('../app/Controllers/DogController')

router.get('/create', dogController.create);
router.post('/store', dogController.store);
router.get('/:id/edit', dogController.edit);
router.put('/:id', dogController.update);
router.delete('/:id', dogController.delete);
router.get('/:slug', dogController.show);

module.exports = router;