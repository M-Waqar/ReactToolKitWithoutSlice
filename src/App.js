import { useSelector, useDispatch } from "react-redux";
import { Decrement, Increment } from "./store/ducks/Counter";
import TodoList from "./TodoList";

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(Increment());
  };
  const handleDecrement = () => {
    dispatch(Decrement());
  };
  return (
    <div className="container">
      <h1>Counter Value is: {count}</h1>
      <button onClick={handleIncrement} className="btn btn-primary mr-2">
        Increment
      </button>
      <button onClick={handleDecrement} className="btn btn-primary mr-2">
        Decrement
      </button>

      <TodoList />
    </div>
  );
}

export default App;
