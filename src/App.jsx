import { useContext } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import NewRecipeForm from "./components/NewRecieForm/NewRecipeForm";
import { ThemeContext } from "./context/ThemeContext";
import { ApiContextProvider } from "./context/ApiContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "../services/PrivateRoute";
import Profile from "./components/Profile/Profile";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <AuthProvider>
        <Router>
          <div className={theme}>
            <Header />
            <ApiContextProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/add-recipe"
                  element={<PrivateRoute element={<NewRecipeForm />} />}
                />
                <Route path="/profile" element={<PrivateRoute element={<Profile/>}/>}/>
                <Route path="/login" element={<Login />} />
              </Routes>
            </ApiContextProvider>
          </div>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
