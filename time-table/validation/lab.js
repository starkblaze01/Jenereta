const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLabInput(data) {
  let errors = {};

  data.labname = !isEmpty(data.labname) ? data.labname : "";
  data.numberoflabs = !isEmpty(data.numberoflabs) ? data.numberoflabs : "";

  if (Validator.isEmpty(data.labname)) {
    errors.labname = "This field is required";
  }

  if (!Validator.isAlphanumeric(data.labname)) {
    errors.labname = "Name Should be Alphanumeric!";
  }

  if (Validator.isEmpty(data.numberoflabs)) {
    errors.numberoflabs = "This field is required";
  }

  if (!Validator.isNumeric(data.numberoflabs) || data.numberoflabs <= 0) {
    errors.numberoflabs = "Please enter a valid positive number";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
