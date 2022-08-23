import React from "react";
import renderer from "react-test-renderer";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import App from "../App";

describe("App", () => {
  it("should correctly match snapshot", () => {
    const theme = createTheme();
    const tree = renderer
      .create(
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
