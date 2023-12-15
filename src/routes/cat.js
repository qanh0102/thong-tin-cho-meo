const express = require('express')
const router = express.Router();

const catController = require('../app/Controllers/CatController')

router.get('/create', catController.create);
router.post('/store', catController.store);
router.get('/:id/edit', catController.edit);
router.put('/:id', catController.update);
router.delete('/:id', catController.delete);
router.get('/:slug', catController.show);

module.exports = router;