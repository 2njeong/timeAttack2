import { createStore } from "redux";
import { combineReducers } from "redux";
import { setTitle } from "../modules/title";
import { setBody } from "../modules/body";
import { todos } from "../modules/todos";

const rootReducer = combineReducers({
  setTitle,
  setBody,
  todos,
});

const store = createStore(rootReducer);

export default store;
