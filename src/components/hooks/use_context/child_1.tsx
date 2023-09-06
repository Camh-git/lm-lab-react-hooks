import { useContext } from "react";
import { currentTheme } from "./themeObject";
import { ThemeContext } from "./parent";

export const Child1: React.FC = () => {
  const theme = useContext(ThemeContext);
  //const dark = false;

  return <div style={theme}>Child 1</div>;
};
/*
import { useContext } from "react";
export const Child1: React.FC = () => {
  
  const theme: theme = useContext{themeContext}

  return <div style={theme}>Child 2</div>;
};

*/
