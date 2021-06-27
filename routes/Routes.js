var express = require("express");
var router = express.Router();
var generateController = require('../controllers/ObjectController');


router.get('/randomObjects', generateController.getObjectsInfo);
router.get('/file', generateController.getFile);


module.exports = router;