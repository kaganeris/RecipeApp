import React, { useState } from "react";
import styles from "../Card/Card.module.css";

const Card = ({
  id,
  title,
  description,
  image,
  deleteRecipe,
  handleEditRecipe,
}) => {
  const [isDeletedLoading, setisDeletedLoading] = useState(false)
  return (
    <div className={styles.card}>
      <img src={image} className={styles.img}></img>

      <h2 className={styles.h2}>{title}</h2>

      <p className={styles.p}>{description}</p>
      <div className={styles.buttons}>
        <button
          className={styles.btnUpdate}
          onClick={() =>
            handleEditRecipe({
              id: id,
              title: title,
              description: description,
              image: image,
            })
          }
        >
          Güncelle
        </button>
        <button
          className={styles.btnDelete}
          onClick={ async () => {
            setisDeletedLoading(true)
            await deleteRecipe(id)
            setisDeletedLoading(false)
          }}
        >
          {isDeletedLoading ? "Loading" : "Sil"}
        </button>
      </div>
    </div>
  );
};

export default Card;
