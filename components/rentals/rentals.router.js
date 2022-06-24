const express = require('express');
const router = express.Router();

const rentalController = require('./rentals.controller')

router.put('/:id', rentalController.update);
router.delete('/:id', rentalController.delete)
router.post('/save', rentalController.save);
router.get('/', rentalController.index);

module.exports = router;