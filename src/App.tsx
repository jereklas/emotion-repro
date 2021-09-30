import React, { useState } from "react";
import { ThemeProvider, createTheme, Button, Typography, Switch } from "@mui/material";

const light = createTheme();
const dark = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [theme, setTheme] = useState(light);

  return (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: theme.palette.background.default }}>
        <Typography style={{ color: theme.palette.text.primary }}>Toggle Theme</Typography>
        <Switch checked={theme === dark} onClick={() => setTheme(theme === light ? dark : light)} />
        {new Array(10).fill(0).map((_, i) => (
          <div key={i}>
            <div style={{ display: "flex", margin: "5px" }}>
              <Button variant="outlined" color="primary">
                A
              </Button>
              <Button variant="outlined" color="secondary">
                A
              </Button>
              <Button variant="outlined" color="info">
                A
              </Button>
              <Button variant="outlined" color="error">
                A
              </Button>
              <Button variant="outlined" color="warning">
                A
              </Button>
              <Button variant="outlined" color="success">
                A
              </Button>
            </div>
            <div style={{ display: "flex", margin: "5px" }}>
              <Button variant="contained" color="primary">
                A
              </Button>
              <Button variant="contained" color="secondary">
                A
              </Button>
              <Button variant="contained" color="info">
                A
              </Button>
              <Button variant="contained" color="error">
                A
              </Button>
              <Button variant="contained" color="warning">
                A
              </Button>
              <Button variant="contained" color="success">
                A
              </Button>
            </div>
            <div style={{ display: "flex", margin: "5px" }}>
              <Button variant="text" color="primary">
                A
              </Button>
              <Button variant="text" color="secondary">
                A
              </Button>
              <Button variant="text" color="info">
                A
              </Button>
              <Button variant="text" color="error">
                A
              </Button>
              <Button variant="text" color="warning">
                A
              </Button>
              <Button variant="text" color="success">
                A
              </Button>
            </div>
          </div>
        ))}
      </div>
    </ThemeProvider>
  );
}

export default App;
