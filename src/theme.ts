import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#8BAA36',
    },
    text: {
      primary: '#23262A',
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
  },
});
