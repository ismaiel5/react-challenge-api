var utilities = require("../utils/utilities");


exports.getRandomObjects = function (req, res) {
  try {
    var objectGenerated = utilities.runGeneratingFuncRandomly(50);
    res.status(200).send(objectGenerated);
  } catch (error) {
    console.error(error);
    res.status(400).send("please try again..");
  }
};

exports.getFile = function (req, res) {

  res.status(200).sendFile('get file function');
};
