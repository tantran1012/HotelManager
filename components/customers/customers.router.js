const express = require('express');
const router = express.Router();

const customerController = require('./customers.controller')

router.get('/create', customerController.create);
router.get('/:id/edit', customerController.edit);
router.put('/:id', customerController.update);
router.delete('/:id', customerController.delete)
router.post('/save', customerController.save);
router.get('/', customerController.index);

module.exports = router;