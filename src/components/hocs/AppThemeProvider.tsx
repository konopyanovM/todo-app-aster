import {
  CssBaseline,
  PaletteMode,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { ReactElement, createContext, useMemo, useState } from 'react';
import { getDesignTokens } from '../../settings';
import { THEME_MODE_KEY } from '../../settings/constants';

export const ThemeModeContext = createContext<{
  mode: PaletteMode;
  set: (mode: PaletteMode) => void;
}>({
  mode: 'light',
  set: () => {},
});

export const AppThemeProvider = ({ children }: any): ReactElement => {
  const [mode, setMode] = useState<PaletteMode>(getMode());

  const set = (mode: PaletteMode) => {
    localStorage.setItem(THEME_MODE_KEY, mode);
    setMode(mode);
  };

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeModeContext.Provider value={{ mode, set }}>
      <ThemeProvider theme={theme}>
        <CssBaseline></CssBaseline>
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
};

function getMode(): PaletteMode {
  return (localStorage.getItem(THEME_MODE_KEY) as PaletteMode) ?? 'light';
}
