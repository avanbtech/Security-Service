// Send request to controller

const express = require('express');
const router = express.Router();
const requestController = require('../controllers/request_controller');

router.post('/customer', requestController.request_post);
router.post('/StatusForm', requestController.get_accessID);
router.post('/ServiceView/approve', requestController.request_approve);
router.post('/ServiceView/reject', requestController.request_reject);

module.exports = router;
