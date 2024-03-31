const express = require('express');
const {sendQuery} = require('../controllers/formController');


const router = express.Router();

router.post('/send-query', sendQuery);



module.exports = {
    routes: router
}

// done