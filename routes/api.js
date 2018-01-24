const express = require('express');
const router = express.Router();
const apiControllers = require('../controllers/api');

router.get('/api/status', apiControllers.getServerStatus);
router.post('/api/pdfconvert', apiControllers.convertPDF);

module.exports = router;