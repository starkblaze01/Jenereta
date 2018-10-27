const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.institutewebsite = !isEmpty(data.institutewebsite)
    ? data.institutewebsite
    : "";

  if (!isEmpty(data.institutewebsite)) {
    if (!Validator.isURL(data.institutewebsite)) {
      errors.institutewebsite = "Not a website";
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
