import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 768,
      lg: 1440,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: '#8BAA36',
    },
    text: {
      primary: '#23262A', // *
      // secondary: '#808080',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#23262A',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: (props) => ({
          [props.theme.breakpoints.down('md')]: {
            paddingRight: '16px',
            paddingLeft: '16px',
          },
          [props.theme.breakpoints.up('md')]: {
            paddingRight: '32px',
            paddingLeft: '32px',
          },
        }),
      },
    },
  },
});
