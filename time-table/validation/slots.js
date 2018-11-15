const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateSlotsInput(data) {
  let errors = {};

  data.monday = !isEmpty(data.monday) ? data.monday : "";
  data.tuesday = !isEmpty(data.tuesday) ? data.tuesday : "";
  data.wednesday = !isEmpty(data.wednesday) ? data.wednesday : "";
  data.thursday = !isEmpty(data.thursday) ? data.thursday : "";
  data.friday = !isEmpty(data.friday) ? data.friday : "";
  data.saturday = !isEmpty(data.saturday) ? data.saturday : "";

  if (Validator.isEmpty(data.monday)) {
    errors.monday = "This field is required";
  }

  if (Validator.isEmpty(data.tuesday)) {
    errors.tuesday = "This field is required";
  }

  if (Validator.isEmpty(data.wednesday)) {
    errors.wednesday = "This field is required";
  }
  if (Validator.isEmpty(data.thursday)) {
    errors.thursday = "This field is required";
  }
  if (Validator.isEmpty(data.friday)) {
    errors.friday = "This field is required";
  }
  if (Validator.isEmpty(data.saturday)) {
    errors.saturday = "This field is required";
  }

  if (!Validator.isNumeric(data.monday) || data.monday <= 0) {
    errors.monday = "Please Enter a Valid Positive Number";
  }

  if (!Validator.isNumeric(data.tuesday) || data.tuesday <= 0) {
    errors.tuesday = "Please Enter a Valid Positive Number";
  }
  if (!Validator.isNumeric(data.wednesday) || data.wednesday <= 0) {
    errors.wednesday = "Please Enter a Valid Positive Number";
  }
  if (!Validator.isNumeric(data.thursday) || data.thursday <= 0) {
    errors.thursday = "Please Enter a Valid Positive Number";
  }
  if (!Validator.isNumeric(data.friday) || data.friday <= 0) {
    errors.friday = "Please Enter a Valid Positive Number";
  }
  if (!Validator.isNumeric(data.saturday) || data.saturday <= 0) {
    errors.saturday = "Please Enter a Valid Positive Number";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
