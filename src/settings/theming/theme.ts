import { PaletteMode, PaletteOptions, ThemeOptions } from '@mui/material';

const lightPallete: PaletteOptions = {
  primary: {
    main: '#FF5733',
  },
  secondary: {
    main: '#E0C2FF',
    light: '#F5EBFF',
    contrastText: '#47008F',
  },
};
const darkPallete: PaletteOptions = {
  primary: {
    main: '#000000de',
  },
  secondary: {
    main: '#00000099',
  },
};

export const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === 'light' ? lightPallete : darkPallete),
  },
});
