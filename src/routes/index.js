const express = require('express');
const { getHello } = require('../controllers/api');

const router = express.Router();

function setupRoutes(app) {
    router.get('/hello', getHello);
    app.use('/api', router);
}

module.exports = setupRoutes;