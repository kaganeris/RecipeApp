import { useContext } from "react";
import Card from "../Card/Card";
import styles from "../Cards/Cards.module.css"
import { ApiContext } from "../../context/ApiContext";

const Cards = () => {

  const {recipes,deleteRecipe,handleEditRecipe} = useContext(ApiContext)

  return (
    <div
      className={styles.div}
    >
      {recipes.map((recipe) => (
        <Card key={recipe.id} {...recipe} deleteRecipe={deleteRecipe} handleEditRecipe={handleEditRecipe} />
      ))}
    </div>
  );
};

export default Cards;
