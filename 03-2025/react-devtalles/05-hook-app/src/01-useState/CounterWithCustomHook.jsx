import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, handleAdd, handleSubstract, handleReset } = useCounter();

  return (
    <>
      <h1>Counter With Hook: {counter}</h1>

      <hr />

      <button
        className="btn btn-primary"
        onClick={() => {
          handleAdd(2);
        }}
      >
        +1
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          handleSubstract(3);
        }}
      >
        -1
      </button>
      <button className="btn btn-primary" onClick={handleReset}>
        Reset
      </button>
    </>
  );
};
