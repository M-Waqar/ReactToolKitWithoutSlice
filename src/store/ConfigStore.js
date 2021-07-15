import { configureStore, combineReducers } from "@reduxjs/toolkit";
import Reducer from "./ducks/Counter";
import TodoReducer from "./ducks/Todo";

const reducers = combineReducers({
  counter: Reducer,
  todolist: TodoReducer,
});

const Store = configureStore({
  reducer: reducers,
});

export default Store;
