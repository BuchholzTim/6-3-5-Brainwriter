export const convertStringToBoolean = (string) => {
  if (typeof string === "string") {
    let stringLowerCase = string.toLowerCase();
    if (stringLowerCase === "true") {
      return true;
    } else {
      return false;
    }
  }
  return false;
};
