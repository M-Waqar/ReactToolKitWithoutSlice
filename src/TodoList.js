import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTodo } from "./store/ducks/Todo";

const TodoList = () => {
  const todolist = useSelector((state) => state.todolist);
  const dispatch = useDispatch();
  const [item, setItem] = useState("");
  const addTodo = () => {
    dispatch(AddTodo({ item: item }));
    setItem("");
  };
  return (
    <div>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button onClick={addTodo} className="btn btn-primary">
        Add Todo
      </button>
      <div>
        <ul>
          {todolist.map((todos, index) => (
            <li key={index}>{todos.item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
