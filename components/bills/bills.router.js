const express = require('express');
const router = express.Router();

const billController = require('./bills.controller')

router.put('/:id', billController.update);
router.delete('/:id', billController.delete)
router.post('/save', billController.save);
router.get('/', billController.index);

module.exports = router;