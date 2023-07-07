const express = require('express');
const calculatorController = require('../controllers/calculatorController');

const router = express.Router();

router.post('/add', calculatorController.addNum);
router.post('/sub', calculatorController.subNum);
router.post('/mul', calculatorController.mulNum);
router.post('/div', calculatorController.divNum);
module.exports = router;
