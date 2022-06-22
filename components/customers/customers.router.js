const express = require('express');
const router = express.Router();

const customerController = require('./customers.controller')

router.get('/:search', customerController.search);
router.get('/', customerController.index);

module.exports = router;