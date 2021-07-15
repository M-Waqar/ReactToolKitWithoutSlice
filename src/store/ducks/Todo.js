import { createAction, createReducer } from "@reduxjs/toolkit";

export const AddTodo = createAction("AddTodo");

const TodoReducer = createReducer([], {
  [AddTodo.type]: (todos, action) => {
    todos.push({ id: Math.random(10) * 100, item: action.payload.item });
  },
});

export default TodoReducer;
