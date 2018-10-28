const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateClassAndsecInput(data) {
  let errors = {};

  data.classAndsec = !isEmpty(data.classAndsec) ? data.classAndsec : "";

  if (Validator.isEmpty(data.classAndsec)) {
    errors.classAndsec = "This field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
