import { useState } from "react";
import "./GifExpertApp.css";
import AddCategory from "../AddCategory/AddCategory";
import GifGrid from "../GifGrid/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const handleAddCategory = (newCategory) => {
    if (newCategory.trim() === "" || categories.includes(newCategory)) return;

    setCategories([...categories, newCategory]);
  };

  return (
    <>
      <h1>Gif Expert App</h1>

      <AddCategory handleAddCategory={handleAddCategory} />

      {categories.map((category, index) => (
        <GifGrid key={index} category={category} />
      ))}
    </>
  );
};

export default GifExpertApp;
