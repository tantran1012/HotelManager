const express = require('express');
const router = express.Router();

const billController = require('./bills.controller')

router.put('/:id', billController.update);
router.delete('/:id', billController.delete)
router.post('/save', billController.save);
router.get('/', billController.index);

router.get('/detail/:id',billController.detail);
module.exports = router;