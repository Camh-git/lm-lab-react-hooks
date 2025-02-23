import { useContext } from "react";
import { ThemeContext } from "./themeObject";

export const Child2: React.FC = () => {
  const theme = useContext(ThemeContext);

  return <div style={theme}>Child 2</div>;
};
