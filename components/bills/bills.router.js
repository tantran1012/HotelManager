const express = require('express');
const router = express.Router();

const billController = require('./bills.controller')

router.get('/', billController.index);
router.get('/add', billController.add);
router.get('/detail', billController.detail);

module.exports = router;