const express = require('express');
const router = express.Router();

const billController = require('./bills.controller')

router.get('/', billController.index);

module.exports = router;