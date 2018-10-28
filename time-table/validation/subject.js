const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateSubjectInput(data) {
  let errors = {};
  data.subject = !isEmpty(data.subject) ? data.subject : "";

  if (Validator.isEmpty(data.subject)) {
    errors.subject = "This field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
