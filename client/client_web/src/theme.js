import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import React from "react";
import { blue } from "@material-ui/core/colors";

const theme = createTheme({
    palette: {
      primary: {
        main: '#2e7d32',
      },
      secondary: {
        main: '#33691e',
      },
      background: {
        default: '#252525',
        paper: '#252525',
      },
      text: {
        primary: '#ffffff',
        secondary: 'rgba(255,255,255,0.54)',
        disabled: 'rgba(249,249,249,0.38)',
        hint: 'rgba(255,253,253,0.38)',
      },
      divider: 'rgba(255,255,255,0.12)',
    },
  });

  function AppTheme(props) {
    return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
  }
  
  export default AppTheme;