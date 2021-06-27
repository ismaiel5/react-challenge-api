var express = require("express");
var router = express.Router();
var generateController = require('./ObjectController');


router.get('/objects', generateController.getObjectsInfo);
router.get('/file', generateController.getFile);


module.exports = router;