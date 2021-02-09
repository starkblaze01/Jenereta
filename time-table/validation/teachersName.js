const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateTeachersNameInput(data) {
  let errors = {};

  data.teachersName = !isEmpty(data.teachersName) ? data.teachersName : "";

  if (Validator.isEmpty(data.teachersName)) {
    errors.teachersName = "This field is required";
  }

  if (!Validator.isAlphanumeric(data.teachersName)) {
    errors.teachersName = "Should be Alphanumeric!";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
