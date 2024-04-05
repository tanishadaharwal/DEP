const express = require('express');
const multer = require('multer');
const {sendQuery} = require('../controllers/formController');
const {sendLFQuery} = require('../controllers/formController');

const router = express.Router();
const upload = multer();

router.post('/send-query', sendQuery);
router.post('/send-lf-query', upload.single('image'), sendLFQuery);


module.exports = {
    routes: router
}

// done