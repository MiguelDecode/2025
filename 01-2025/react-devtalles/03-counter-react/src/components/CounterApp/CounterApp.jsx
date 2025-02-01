import PropTypes from "prop-types";
import { useState } from "react";

export const CounterApp = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSubstract = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(initialValue);
  };

  return (
    <>
      <h4>CounterApp</h4>
      <h5>{count}</h5>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleSubstract}>-1</button>
      <button aria-label="btn-reset"  onClick={handleReset}>
        Reset
      </button>
    </>
  );
};

CounterApp.propTypes = {
  initialValue: PropTypes.number,
};
