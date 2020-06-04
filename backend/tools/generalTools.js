module.exports = {
  /**
   * Generates a Random Code consisting of all letters aA-zZ and 0-1
   *
   * @param {Number} length - Length of Code
   */
  generateCode: function (length) {
    let result = "";
    let characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  },
  checkExistence: function (variable) {
    return variable != null && variable;
  },
  convertStringToBoolean: function (string) {
    if (typeof string === "string") {
      let stringLowerCase = string.toLowerCase();
      if (stringLowerCase === "true") {
        return true;
      } else {
        return false;
      }
    }
    return false;
  },
};
