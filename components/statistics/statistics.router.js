const express = require('express');
const router = express.Router();

const statisticController = require('./statistics.controller')

router.get('/:id/view', statisticController.viewStatistics);
router.put('/:id/:idLine', statisticController.updateLine);
router.delete('/:id/:idLine', statisticController.deleteLine);
router.post('/:id/save', statisticController.saveOne);

router.put('/:id/', statisticController.update);
router.delete('/:id/', statisticController.delete);
router.post('/save', statisticController.save);

router.get('/', statisticController.index);

module.exports = router;