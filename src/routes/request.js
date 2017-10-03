// Send request to controller

const express = require('express');
const router = express.Router();
const requestController = require('../controllers/request_controller');

router.post('/', requestController.request_post);

module.exports = router;
