import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#E7E7E7",
    },
    primary: {
      main: "#fbbf24",
    },
    secondary: {
      main: "#4f46e5",
    },
  },
  typography: {
    fontFamily: `'Akshar', 'Helvetica', 'Arial', sans-serif`,
  },
});
