import { useState } from "react";

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleReset = () => {
    setCounter(initialValue);
  };

  const handleSubstract = () => {
    if (counter <= 0) return;

    setCounter(counter - 1);
  };

  return {
    counter,
    handleAdd,
    handleReset,
    handleSubstract,
  };
};

