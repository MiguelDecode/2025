import { useState } from "react";
import { useCounter } from "../hooks/useCounter";
import { Small } from "./Small";

export const Memorize = () => {
  const { counter, handleAdd } = useCounter(10);
  const [show, setShow] = useState(true);

  return (
    <>
      <h1>
        Counter: <Small value={counter} />
      </h1>

      <hr />

      <button className="btn btn-primary" onClick={() => handleAdd(1)}>
        +
      </button>

      <button
        className="btn btn-outline-primary"
        onClick={() => setShow(!show)}
      >
        Show/Hide "{JSON.stringify(show)}"
      </button>
    </>
  );
};
