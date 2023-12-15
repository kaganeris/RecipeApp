
import { useContext, useState } from "react";
import styles from "../Header/Header.module.css";
import { ThemeContext } from "../../context/ThemeContext.jsx";

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
  return (
    <nav className={styles.nav}>
      <div>
        <p className={styles.p}>Recipe Platform</p>
      </div>
      <table>
        <tbody>
          <tr>
            <td>
              <a href="" className={styles.a}>
                Home
              </a>
            </td>
            <td>
              <a href="" className={styles.a}>
                Add Recipe
              </a>
            </td>
            <td>
              <a href="" className={styles.a}>
                About
              </a>
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
