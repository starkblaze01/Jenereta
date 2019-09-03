import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import profileReducer from "./profileReducer";
import teacherReducer from "./teacherReducer";
import subjectReducer from "./subjectReducer";
import classReducer from "./classReducer";
import slotReducer from "./slotReducer";
import timeTableReducer from './timeTableReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
  teacher: teacherReducer,
  subject: subjectReducer,
  classes: classReducer,
  slot: slotReducer,
  timeTable: timeTableReducer,
});
