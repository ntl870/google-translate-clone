import { combineReducers } from "redux";
import { createStore } from "redux";
import input from "./reducers/input";
import output from "./reducers/output";
import translated from "./reducers/translated";

const rootReducers = combineReducers({
  input: input,
  output: output,
  translated: translated,
});

export default createStore(rootReducers);
