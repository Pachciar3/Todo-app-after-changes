import { combineReducers } from "redux";
import uiReducer from "./ui/redux";
import tasksReducer from "./components/TodoApp/redux";

const rootReducer = combineReducers({
  tasks: tasksReducer,
  ui: uiReducer
});

export default rootReducer;
