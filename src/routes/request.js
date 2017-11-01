// Send request to controller

const express = require('express');
const router = express.Router();
const requestController = require('../controllers/request_controller');

router.post('/customer', requestController.request_post);
router.post('/ServiceView/approve', requestController.request_approve);
router.post('/ServiceView/reject', requestController.request_reject);
router.post('/status', requestController.check_status);
router.post('/CSV', requestController.export_data);

module.exports = router;
