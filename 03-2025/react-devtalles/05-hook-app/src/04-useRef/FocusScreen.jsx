import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <h1>Focus Screen</h1>

      <hr />

      <input
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control"
        ref={inputRef}
      />

      <button onClick={handleFocus} className="btn btn-primary mt-2">
        Set Focus
      </button>
    </>
  );
};
