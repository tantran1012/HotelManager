const express = require('express');
const router = express.Router();

const roomController = require('./rooms.controller')

router.get('/', roomController.index);
router.get('/add', roomController.add);
router.get('/detail', roomController.detail);

module.exports = router;