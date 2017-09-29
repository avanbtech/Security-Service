// Send request to controller

var express = require('express');
var router = express.Router();
var requestController = require('../controllers/request_controller');

router.post('/', requestController.request_post);

module.exports = router;
