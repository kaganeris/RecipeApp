import { useContext, useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NewRecipeForm from "./components/NewRecieForm/NewRecipeForm";
import axios from "axios";
import UpdateRecipe from "./components/UpdateRecipe/UpdateRecipe";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const [recipes, setRecipes] = useState([]);

  const [isLoading, setIsLoading] = useState({
    read: false,
    add: false,
  });

  const [editRecipe, setEditRecipe] = useState({
    id: null,
    title: null,
    description: null,
    image: null,
  });

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const getRecipes = async () => {
      try {
        setIsLoading((prevIsLoading) => ({ ...prevIsLoading, read: true }));
        const res = await axios.get("http://localhost:3000/recipes");
        setRecipes(res.data);
      } catch (error) {
        console.log("There was an error while fetching the recipes");
      }
      setIsLoading((prevIsLoading) => ({ ...prevIsLoading, read: false }));
    };
    getRecipes();
  }, []);

  const deleteRecipe = async (id) => {
    setIsLoading((prevIsLoading) => ({ ...prevIsLoading, delete: true }));

    try {
      const res = await axios.delete("http://localhost:3000/recipes/" + id);
      setRecipes(recipes.filter((recipe) => recipe.id != id));
    } catch (error) {}

    setIsLoading((prevIsLoading) => ({ ...prevIsLoading, delete: false }));
  };

  const updateRecipe = async (id, updatedRecipe) => {
    try {
      const res = await axios.put(
        "http://localhost:3000/recipes/" + id,
        updatedRecipe
      );
      const updatedRecipes = recipes.map((recipe) =>
        recipe.id === id ? updatedRecipe : recipe
      );
      setRecipes(updatedRecipes);
    } catch (error) {}
  };

  const addRecipeToList = async (newRecipe) => {
    setIsLoading((prevIsLoading) => ({ ...prevIsLoading, add: true }));
    try {
      const res = await axios.post("http://localhost:3000/recipes", newRecipe);
      console.log(res.data);
      setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
    } catch (error) {
      alert(error);
    }
    setIsLoading((prevIsLoading) => ({ ...prevIsLoading, add: false }));
  };

  const handleEditRecipe = (recipe) => {
    console.log(recipe);
    setEditRecipe(recipe);
  };

  const cancelEditRecipe = (recipe) => {
    setEditRecipe(recipe);
  };

  return (
    <>
      <div className={theme}>
        <Header />
        <Home />
        <NewRecipeForm
          addRecipeToList={addRecipeToList}
          isLoading={isLoading}
        />
        {editRecipe.id === null ? (
          <span></span>
        ) : (
          <UpdateRecipe
            editRecipe={editRecipe}
            cancelEditRecipe={cancelEditRecipe}
            updateRecipe={updateRecipe}
          />
        )}
        {isLoading.read ? (
          <p>Loading</p>
        ) : (
          <Cards
            recipes={recipes}
            deleteRecipe={deleteRecipe}
            handleEditRecipe={handleEditRecipe}
          />
        )}
      </div>
    </>
  );
}

export default App;
