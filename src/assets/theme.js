import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

export const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      type: 'dark',
      text: {
        primary: '#D8D8D8',
        secondary: '#D8D8D8',
      },
      primary: {
        main: '#24697A',
        contrastText: '#D8D8D8',
      },
      secondary: {
        main: '#00acc1',
      },
    },
    typography: {
      fontFamily: `"Raleway", "Open Sans", "Roboto", sans-serif`,
      h1: {
        fontFamily: `"Megrim", "sans-serif"`,
      },
      h2: {
        fontFamily: `"Megrim", "sans-serif"`,
      },
      h3: {
        fontFamily: `"Megrim", "sans-serif"`,
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 320,
        md: 425,
        lg: 768,
        xl: 1440,
      },
    },
  }),
);
