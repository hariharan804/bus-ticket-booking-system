'use client';
import { Box, SxProps } from '@mui/material';
import React from 'react';

export const styles: { [key: string]: SxProps } = {
  root: {
    minHeight: '100svh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

function Login() {
  return (
    <div>
      <Box sx={styles.root}>J</Box>
    </div>
  );
}

export default Login;
