import { useContext, createContext } from "react";
export interface theme {
  backgroundColor: string;
  color: string;
  padding: string;
  margin: string;
  darkMode: boolean;
}
const darkTheme = false;
export const currentTheme: theme = {
  backgroundColor: darkTheme ? "#333" : "#CCC",
  color: darkTheme ? "white" : "#333",
  padding: "2rem",
  margin: "2rem",
  darkMode: false,
};
export const ThemeContext = createContext<theme>(currentTheme);
