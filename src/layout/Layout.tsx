import { ReactElement } from 'react';
import { LayoutProps } from './types';
import { Theme, useTheme } from '@mui/material';

export const Layout = ({ children }: LayoutProps): ReactElement => {
  const theme: Theme = useTheme();

  return (
    <main
      className="layout"
      style={{ backgroundColor: theme.palette.primary.main }}
    >
      {children}
    </main>
  );
};
