var utilities = require('../utils/utilities');




exports.getRandomObjects = function (req, res) {
  
  var objectGenerated =  utilities.runGeneratingFuncRandomly(20);

  res.status(200).send(objectGenerated);
};

exports.getFile = function (req, res) {
  res.status(200).send("get file function");
};
