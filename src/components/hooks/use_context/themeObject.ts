import { createContext } from "react";
export interface theme {
  backgroundColor: string;
  color: string;
  padding: string;
  margin: string;
}
const darkTheme = false;
const defaultTheme: theme = {
  backgroundColor: darkTheme ? "#333" : "#CCC",
  color: darkTheme ? "white" : "#333",
  padding: "2rem",
  margin: "2rem",
};
export const ThemeContext = createContext<theme>(defaultTheme);
