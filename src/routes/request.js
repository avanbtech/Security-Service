/* request.js
** Sends requests to the controller
*/

const express = require('express');
const router = express.Router();
const requestController = require('../controllers/request_controller');

//Each request that is being sent to the controller
router.post('/customer', requestController.request_post);
router.post('/StatusForm/:referenceID', requestController.get_accessID);
router.post('/ServiceView/approve', requestController.request_approve);
router.post('/ServiceView/reject', requestController.request_reject);
router.post('/CSV', requestController.export_to_pdf);
router.post('/StatusForm/', requestController.get_accessID);

module.exports = router;
