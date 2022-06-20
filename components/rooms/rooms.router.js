const express = require('express');
const router = express.Router();

const roomController = require('./rooms.controller')

router.get('/', roomController.index);

module.exports = router;