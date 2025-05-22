import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@coinucopia/App";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "@coinucopia/themes/Themes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
