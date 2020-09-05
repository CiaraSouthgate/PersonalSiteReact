import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const lightBlue = {
  light: '#8EBCC7',
  main: '#5C94A1',
  dark: '#226574',
  contrastText: '#000000',
};

const darkBlue = {
  light: '#5A757C',
  main: '#293F45',
  dark: '#0C262E',
  contrastText: '#D8CEB7',
};

export const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: lightBlue,
      secondary: darkBlue,
    },
    typography: {
      fontFamily: `"Open Sans", "Roboto", sans-serif`,
    },
  }),
);

// export const theme = responsiveFontSizes(themeElements);
