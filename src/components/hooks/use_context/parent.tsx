import { useState, createContext } from "react";
import { Child1 } from "./child_1";
import { Child2 } from "./child_2";
import { ThemeContext } from "./themeObject";

export const Parent = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  const [currentTheme, setCurrentTheme] = useState({
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "white" : "#333",
    padding: "2rem",
    margin: "2rem",
  });

  const toggleTheme = () => {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
    setCurrentTheme(() => {
      const newTheme = {
        backgroundColor: "white",
        color: "black",
        padding: currentTheme.padding,
        margin: currentTheme.margin,
      };
      if (darkTheme === true) {
        newTheme.backgroundColor = "#ccc";
        newTheme.color = "#333";
      } else {
        newTheme.backgroundColor = "#333";
        newTheme.color = "white";
      }
      return newTheme;
    });
  };

  return (
    <div className="section">
      <h2>useContext</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>

      <ThemeContext.Provider value={currentTheme}>
        <Child1 />
        <Child2 />
      </ThemeContext.Provider>
    </div>
  );
};
