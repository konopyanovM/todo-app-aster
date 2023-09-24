import { Theme, createTheme } from '@mui/material/styles';

export const theme: Theme = createTheme({
  palette: {
    primary: {
      main: '#9200ff',
      contrastText: '#fff',
    },
    secondary: {
      main: '#4aedc4',
      contrastText: '#000',
    },
  },
});
