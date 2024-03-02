const express = require('express');
const {createClient} = require('../controllers/clientController');


const router = express.Router();

router.post('/create-client', createClient);

module.exports = {
    routes: router
}

// done