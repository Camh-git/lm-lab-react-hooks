import { useState, createContext, useContext } from "react";
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
  const ThemeContext = createContext<theme>({
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "white" : "#333",
    padding: "2rem",
    margin: "2rem",
  });

  return (
    <div className="section">
      <h2>useContext</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Child1 dark={darkTheme} />
      <Child2 dark={darkTheme} />
    </div>
  );
};
