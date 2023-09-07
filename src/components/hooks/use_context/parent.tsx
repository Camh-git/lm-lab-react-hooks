import { useState, createContext } from "react";
import { Child1 } from "./child_1";
import { Child2 } from "./child_2";
import { currentTheme, ThemeContext } from "./themeObject";

export const Parent = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
    console.log("darkmode: " + darkTheme);
    console.log("backcolour: " + currentTheme.backgroundColor);
  };

  return (
    <div className="section">
      <h2>useContext</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>

      <ThemeContext.Provider value={currentTheme}>
        <Child1 />
        <Child2 dark={darkTheme} />
      </ThemeContext.Provider>
    </div>
  );
};
