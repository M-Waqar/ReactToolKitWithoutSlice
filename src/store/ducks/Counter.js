import { createAction, createReducer } from "@reduxjs/toolkit";

export const Increment = createAction("INC");
export const Decrement = createAction("DEC");
const initialState = {
  count: 10,
};

const Reducer = createReducer(initialState, {
  [Increment.type]: (state, action) => {
    return { ...state, count: state.count + 1 };
  },
  [Decrement.type]: (state, action) => {
    return { ...state, count: state.count - 1 };
  },
});

export default Reducer;
