import axios from "axios";
import React, { useState } from "react";
import styles from "../NewRecieForm/NewRecipeForm.module.css";

const NewRecipeForm = ({ addRecipeToList,isLoading }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const [titleErr, setTitleErr] = useState(false);
  const [descriptionErr, setDescriptionErr] = useState(false);
  const [imageErr, setImageErr] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title.trim() && description.trim() && image.trim()) {
      addRecipeToList({ title, description, image });
      setTitle("");
      setDescription("");
      setImage("");
      setTitleErr(false);
      setImageErr(false);
      setDescriptionErr(false);
    } else {
      title.trim() === "" ? setTitleErr(true) : setTitleErr(false);
      description.trim() === ""
        ? setDescriptionErr(true)
        : setDescriptionErr(false);
      image.trim() === "" ? setImageErr(true) : setImageErr(false);
    }
  };

  return (
    <div className={styles.div}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          value={title}
          type="text"
          placeholder="Recipe Title"
          onChange={(event) => setTitle(event.target.value)}
        />
        {titleErr && <p>Recipe Title cannot be empty!</p>}
        <textarea
          value={description}
          placeholder="Recipe Description"
          onChange={(event) => setDescription(event.target.value)}
        />
        {descriptionErr && <p>Recipe Description cannot be empty!</p>}
        <input
          value={image}
          type="text"
          placeholder="Image URL"
          onChange={(event) => setImage(event.target.value)}
        />
        {imageErr && <p>Recipe Image cannot be empty!</p>}
        <button type="submit">{isLoading.add ? "Loading" : "Add Recipe"}</button>
      </form>
    </div>
  );
};

export default NewRecipeForm;
