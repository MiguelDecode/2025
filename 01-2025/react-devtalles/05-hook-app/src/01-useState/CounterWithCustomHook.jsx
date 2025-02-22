import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, handleAdd, handleReset, handleSubstract } = useCounter();

  return (
    <>
      <h1>Counter with a custom Hook: {counter}</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleAdd}>
        +1
      </button>
      <button className="btn btn-primary" onClick={handleReset}>
        Reset
      </button>
      <button className="btn btn-primary" onClick={handleSubstract}>
        -1
      </button>
    </>
  );
};
