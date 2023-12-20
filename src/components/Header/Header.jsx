
import { useContext, useState } from "react";
import styles from "../Header/Header.module.css";
import { ThemeContext } from "../../context/ThemeContext.jsx";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.jsx";

const ThemeSlider = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);
  
  //const [isToggled, setIsToggled] = useState(theme === 'dark');

  const handleToggle = () => {
    //setIsToggled(!isToggled)
    toggleTheme()
  };

  return (
    <div
      onClick={handleToggle}
      className={styles["slider-container"] + " " + styles[theme]}
    >
      <div className={styles["slider-button"]}></div>
    </div>
  );
};

const Header = () => {

  const {isAuthenticated,logout} = useContext(AuthContext)

  const navigate = useNavigate()


  const handleLogin = () => {
    navigate("/login")
  }

  const handleLogout = () => {
    logout()
    navigate("/login")
  }

  return (
    <nav className={styles.nav}>
      <div>
        <p className={styles.p}>Recipe Platform</p>
      </div>
      <table>
        <tbody>
          <tr>
            <td>
              <Link to={"/"} className={styles.a}>
                Home
              </Link>
            </td>
            <td>
              <Link to={"/add-recipe"} className={styles.a}>
                Add Recipe
              </Link>
            </td>
            <td>
              {isAuthenticated ? <Link to={"/profile"} className={styles.a}>
                Profile
              </Link> : <span></span>}
            </td>
            <td>
              <button onClick={isAuthenticated ? handleLogout : handleLogin}> {isAuthenticated ? "Logout" : "Login"}</button>
            </td>
            <td>
                <ThemeSlider/>
            </td>
          </tr>
        </tbody>
      </table>
    </nav>
  );
};

export default Header;
