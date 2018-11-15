const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateSlotDetailsInput(data) {
  let errors = {};

  data.teacher = !isEmpty(data.teacher) ? data.teacher : "";
  data.sections = !isEmpty(data.sections) ? data.sections : "";
  data.subject = !isEmpty(data.subject) ? data.subject : "";
  data.numLectures = !isEmpty(data.numLectures) ? data.numLectures : "";

  if (Validator.isEmpty(data.teacher)) {
    errors.teacher = "This field is required";
  }

  if (Validator.isEmpty(data.sections)) {
    errors.sections = "This field is required";
  }

  if (Validator.isEmpty(data.subject)) {
    errors.subject = "This field is required";
  }
  if (Validator.isEmpty(data.numLectures) || data.numLectures <= 0) {
    errors.numLectures = "Please Enter a valid positive number";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
