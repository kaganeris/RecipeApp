import { createContext,useState,useEffect } from "react"
import axios from "axios";
import AuthService from "../../services/AuthService";

export const ApiContext = createContext()

export const ApiContextProvider = ({children}) => {
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
      const user = AuthService.getCurrentUser()
      const token = user?.token;

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


    return <ApiContext.Provider value={{addRecipeToList,isLoading,editRecipe,cancelEditRecipe,updateRecipe,recipes,deleteRecipe,handleEditRecipe}}>
        {children}
    </ApiContext.Provider>
}