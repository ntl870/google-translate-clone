import { combineReducers } from "redux";
import { createStore } from "redux";
import input from "./reducers/input";
import output from "./reducers/output";
const rootReducers = combineReducers({
  input: input,
  output: output,
});

export default createStore(rootReducers);
