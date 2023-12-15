import Card from "../Card/Card";
import styles from "../Cards/Cards.module.css"

const Cards = ({recipes,deleteRecipe,isLoading,handleEditRecipe}) => {


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
