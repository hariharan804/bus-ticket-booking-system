'use client';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import React from 'react';
import { lightTheme } from './lightTheme';

export const MuiThemeProvider = ({
  children,
}: {
  // eslint-disable-next-line prettier/prettier
  children: React.ReactNode;
}) => {
  const theme = createTheme(lightTheme);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </>
  );
};
