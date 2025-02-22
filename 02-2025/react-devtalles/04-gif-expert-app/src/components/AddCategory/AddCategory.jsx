import PropTypes from "prop-types";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const AddCategory = ({ handleAddCategory }) => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddCategory(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit} aria-label="form">
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={handleInputChange}
        ref={inputRef}
        id="category"
        name="category"
      />
    </form>
  );
};

export default AddCategory;

AddCategory.propTypes = {
  handleAddCategory: PropTypes.func.isRequired,
};
