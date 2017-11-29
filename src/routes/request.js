/* request.js
** Sends requests to the controller
*/

const express = require('express');
const router = express.Router();
const requestController = require('../controllers/request_controller');

//Each request that is being sent to the controller
router.post('/customer', requestController.request_post);
router.post('/StatusForm/:referenceID/:email', requestController.get_accessID);
router.post('/ServiceView/approve', requestController.request_approve);
router.post('/ServiceView/reject', requestController.request_reject);
router.post('/CSV', requestController.export_to_pdf);
router.post('/StatusForm/', requestController.get_accessID);
router.post('/GuardView', requestController.get_guards);
router.post('/GuardJobs/:dispatchNumber', requestController.get_guardJobs);
router.post('/exportguards', requestController.guardExport);
router.get('/casredirect', requestController.casredirect);
router.get('/login', requestController.login);
router.get('/forward', requestController.load);
router.post('/login', requestController.load);
//router.post('/login', requestController.load);

module.exports = router;
