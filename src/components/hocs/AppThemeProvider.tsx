import {
  CssBaseline,
  PaletteMode,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { createContext, useMemo, useState } from 'react';
import { getDesignTokens } from '../../settings';

const THEME_MODE = 'themeMode';

export const ThemeModeContext = createContext<{
  mode: PaletteMode;
  set: (mode: PaletteMode) => void;
}>({
  mode: 'light',
  set: () => {},
});

export const AppThemeProvider = ({ children }: any) => {
  const [mode, setMode] = useState<PaletteMode>(getMode());

  const set = (mode: PaletteMode) => {
    localStorage.setItem(THEME_MODE, mode);
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
  return (localStorage.getItem(THEME_MODE) as PaletteMode) ?? 'light';
}
