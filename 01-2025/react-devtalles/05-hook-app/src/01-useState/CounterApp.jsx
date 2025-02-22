import { useState } from "react";

export const CounterApp = () => {
  const [counter, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const { counter1, counter2, counter3 } = counter;

  const handleAdd = () => {
    setCounter({
      counter1: counter1 + 1,
      counter2: counter2 + 2,
      counter3: counter3 + 3,
    });
  };

  return (
    <>
      <h2>Counter x 1: {counter1}</h2>

      <h2>Counter x 2: {counter2}</h2>

      <h2>Counter x 3: {counter3}</h2>

      <hr />

      <button className="btn" onClick={handleAdd}>
        +1
      </button>
    </>
  );
};
