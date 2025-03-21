import { useState } from "react";

export const CounterApp = () => {
  const [counter, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const { counter1, counter2, counter3 } = counter;

  const handleAdd = () => {
    setCounter({ ...counter, counter1: counter1 + 1 });
  };

  return (
    <>
      <h1>Counter App: {counter1} </h1>

      <hr />

      <button className="btn btn-primary" onClick={handleAdd}>
        +1
      </button>
    </>
  );
};
