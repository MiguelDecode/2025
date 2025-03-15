import { useState } from "react";
import { ShowIncrement } from "./ShowIncrement";
import { useCallback } from "react";
import { useEffect } from "react";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const incrementFather = useCallback((step = 0) => {
    console.log(step);
    setCounter((value) => value + step);
  }, []);

  useEffect(() => {
    incrementFather();
  }, [incrementFather]);

  return (
    <>
      <h1>UseCallback Hook: {counter}</h1>

      <hr />

      <ShowIncrement increment={incrementFather} />
    </>
  );
};
