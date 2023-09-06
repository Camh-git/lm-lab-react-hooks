import { useContext } from "react";

export const Child1: React.FC = () => {
  //const dark = useContext(currentTheme);
  const dark = false;
  const theme = {
    backgroundColor: dark ? "#333" : "#CCC",
    color: dark ? "white" : "#333",
    padding: "2rem",
    margin: "2rem",
  };

  return <div style={theme}>Child 1</div>;
};
/*
import { useContext } from "react";
export const Child1: React.FC = () => {
  
  const theme: theme = useContext{themeContext}

  return <div style={theme}>Child 2</div>;
};

*/
