exports.generateAlphaNumericObject = function () {
  let values = "";
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < 30; i++) values += possible.charAt(Math.floor(Math.random() * possible.length));

  return { "Alphanumerics Objects": values };
};

exports.generateAlphabitObject = function () {
  let values = "";
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < 30; i++) values += possible.charAt(Math.floor(Math.random() * possible.length));

  return { "Alphabetical Objects": values };
};

exports.getRandomFloatNumObject = function () {
  const values = (Math.random() * 1000).toFixed(5);
  return { "Float Numbers Objects": values };
};

exports.getRandomIntObject = function () {
  const values = Math.ceil(Math.random() * 100000);
  return { "Integers Objects": values };
};

exports.runGeneratingFuncRandomly = function (numerOfTimes) {
  let initialCount = 0;
  let objectArray = [];

  do {
    const randomNum = Math.floor(Math.random() * 4);
    switch (randomNum) {
      case 0:
        objectArray.push(this.generateAlphaNumericObject());
        break;
      case 1:
        objectArray.push(this.generateAlphabitObject());
        break;
      case 2:
        objectArray.push(this.getRandomIntObject());
        break;
      case 3:
        objectArray.push(this.getRandomFloatNumObject());
      default:
        break;
    }
    initialCount++;
  } while (initialCount < numerOfTimes);

  return objectArray;
};
