import { useState } from "react";
import { Child1 } from "./child_1";
import { Child2 } from "./child_2";
import { theme, defaultTheme, ThemeContext } from "./themeObject";

export const Parent = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  const [currentTheme, setCurrentTheme] = useState(defaultTheme);

  const toggleTheme = () => {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
    setCurrentTheme(() => {
      const newColours = () => {
        if (darkTheme === true) {
          return ["#333", "white"];
        } else {
          return ["#ccc", "#333"];
        }
      };
      const newTheme: theme = {
        backgroundColor: newColours()[0],
        color: newColours()[1],
        padding: currentTheme.padding,
        margin: currentTheme.margin,
      };
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
