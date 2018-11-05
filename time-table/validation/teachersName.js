const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateDataInput(data) {
  let errors = {};

  data.teachersName = !isEmpty(data.teachersName) ? data.teachersName : "";

  if (Validator.isEmpty(data.teachersName)) {
    errors.teachersName = "This field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
