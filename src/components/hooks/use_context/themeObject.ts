export interface theme {
  backgroundColor: string;
  color: string;
  padding: string;
  margin: string;
}
const darkTheme = false;
export const currentTheme: theme = {
  backgroundColor: darkTheme ? "#333" : "#CCC",
  color: darkTheme ? "white" : "#333",
  padding: "2rem",
  margin: "2rem",
};
