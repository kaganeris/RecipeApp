import { useEffect, useState } from "react";
import styles from "../UpdateRecipe/UpdateRecipe.module.css";

const UpdateRecipe = ({ editRecipe, cancelEditRecipe, updateRecipe }) => {
  const [editTitle, setEditTitle] = useState("");
  const [editdescription, setEditDescription] = useState("");
  const [editimage, setEditImage] = useState("");

  useEffect(() => {
    setEditTitle(editRecipe.title);
    setEditDescription(editRecipe.description);
    setEditImage(editRecipe.image);
  }, [editRecipe]);

  const handleEditSummit = (e) => {
    e.preventDefault();

    updateRecipe(editRecipe.id, {
      title: editTitle,
      description: editdescription,
      image: editimage,
    });
  };

  return (
    <div className={styles.div}>
      <form className={styles.form} onSubmit={handleEditSummit}>
        <input
          value={editTitle}
          type="text"
          onChange={(event) => setEditTitle(event.target.value)}
          required
        />

        <textarea
          value={editdescription}
          onChange={(event) => setEditDescription(event.target.value)}
        />

        <input
          value={editimage}
          type="text"
          required
          onChange={(event) => setEditImage(event.target.value)}
        />
        <div className={styles.buttons}>
          <button type="submit">Güncelle</button>
          <button
            onClick={() =>
              cancelEditRecipe({
                id: null,
                title: null,
                description: null,
                image: null,
              })
            }
          >
            İptal
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateRecipe;
