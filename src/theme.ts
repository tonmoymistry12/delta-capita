import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { 
      main: "#6C5CE7",
      light: "#8B7EF5",
      dark: "#5B4BC4",
      contrastText: "#ffffff"
    },
    secondary: { 
      main: "#a855f7",
      light: "#c084fc",
      dark: "#9333ea"
    },
    success: { main: "#10b981" },
    error: { main: "#ef4444" },
    background: {
      default: "#f8f9fc",
      paper: "#ffffff",
    },
    text: {
      primary: "#1a202c",
      secondary: "#4a5568",
    }
  },
  typography: {
    fontFamily: "'Poppins', 'Roboto', sans-serif",
    h5: { fontWeight: 600 },
    h6: {
      fontSize: "1.125rem",
      "@media (max-width:600px)": {
        fontSize: "1rem",
      },
    },
    body1: { 
      fontSize: 14,
      "@media (max-width:600px)": {
        fontSize: 13,
      },
    },
    button: { textTransform: "none", fontWeight: 500 },
  },
  shape: { borderRadius: 16 },
  breakpoints: {
    values: {
      xs: 0,      // Mobile portrait
      sm: 600,    // Mobile landscape / Small tablet
      md: 900,    // Tablet portrait
      lg: 1200,   // Tablet landscape / Desktop
      xl: 1536,   // Large desktop
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: "0px",
          paddingRight: "0px",
          "@media (min-width: 600px)": {
            paddingLeft: "24px",
            paddingRight: "24px",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          minHeight: 48,
          fontSize: "1rem",
          fontWeight: 600,
          borderRadius: "12px",
          textTransform: "none",
          boxShadow: "none",
          transition: "all 0.3s ease",
          "@media (max-width:600px)": {
            minHeight: 44,
            fontSize: "0.9375rem",
          },
        },
        contained: {
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          "&:hover": {
            background: "linear-gradient(135deg, #5B4BC4 0%, #6C3BA2 100%)",
            boxShadow: "0 8px 24px rgba(108, 92, 231, 0.35)",
            transform: "translateY(-2px)",
          },
        },
        outlined: {
          borderWidth: "2px",
          "&:hover": {
            borderWidth: "2px",
            transform: "translateY(-2px)",
            boxShadow: "0 4px 12px rgba(108, 92, 231, 0.2)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "0px",
          boxShadow: "0 4px 12px rgba(108, 92, 231, 0.1)",
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: "0 8px 24px rgba(108, 92, 231, 0.2)",
          },
          "@media (min-width: 600px)": {
            borderRadius: "16px",
          },
        },
      },
    },
  },
});

export default theme;


