const express = require('express');
const router = express.Router();

const roomController = require('./rooms.controller')

router.put('/:id', roomController.update);
router.delete('/:id', roomController.delete)
router.post('/save', roomController.save);
router.get('/', roomController.index);

module.exports = router;