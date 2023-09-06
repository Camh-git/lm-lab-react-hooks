import { useState, createContext } from "react";
import { Child1 } from "./child_1";
import { Child2 } from "./child_2";

interface theme {
  backgroundColor: string;
  color: string;
  padding: string;
  margin: string;
}

export const Parent = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  };
  const currentTheme: theme = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "white" : "#333",
    padding: "2rem",
    margin: "2rem",
  };
  const ThemeContext = createContext<boolean>(darkTheme);

  return (
    <div className="section">
      <h2>useContext</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>

      <ThemeContext.Provider value={darkTheme}>
        <Child1 />
        <Child2 dark={darkTheme} />
      </ThemeContext.Provider>
    </div>
  );
};
