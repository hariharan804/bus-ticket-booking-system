/* eslint-disable prettier/prettier */
import { PaletteColorOptions, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypeBackground {
    50?: string;
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
    A100?: string;
    A200?: string;
    A300?: string;
  }

  interface TypeText {
    50?: string;
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
    A100?: string;
    A200?: string;
    A300?: string;
  }

  interface PaletteColor {
    50?: string;
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
    A100?: string;
    A200?: string;
    A300?: string;
  }
  interface Palette {
    dark?: PaletteColor;
    main?: PaletteColor;
    light?: PaletteColor;
    50?: PaletteColor;
    100?: PaletteColor;
    200?: PaletteColor;
    300?: PaletteColor;
    400?: PaletteColor;
    500?: PaletteColor;
    600?: PaletteColor;
    700?: PaletteColor;
    800?: PaletteColor;
    900?: PaletteColor;
    A100?: PaletteColor;
    A200?: PaletteColor;
    A300?: PaletteColor;
    accent?: PaletteColor;
  }
  interface PaletteOptions {
    dark?: PaletteColorOptions;
    main?: PaletteColorOptions;
    light?: PaletteColorOptions;
    50?: PaletteColorOptions;
    100?: PaletteColorOptions;
    200?: PaletteColorOptions;
    300?: PaletteColorOptions;
    400?: PaletteColorOptions;
    500?: PaletteColorOptions;
    600?: PaletteColorOptions;
    700?: PaletteColorOptions;
    800?: PaletteColorOptions;
    900?: PaletteColorOptions;
    A100?: PaletteColorOptions;
    A200?: PaletteColorOptions;
    A300?: PaletteColorOptions;
    accent?: {
      primary?: string;
      secondary?: string;
      main?: string;
    };
  }
  interface CommonColors {
    transparent: string;
  }
}

export const darkTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    common: {
      black: '#ffffff',
      white: '#17171f',
      transparent: 'transparent',
    },
    primary: {
      dark: '#d3cbea',
      main: '#c0b4e1',
      light: '#ada2cb',
      50: '#c0b4e1',
      100: '#c6bce4',
      200: '#cdc3e7',
      300: '#d3cbea',
      400: '#e0daf0',
      500: '#e6e1f3',
      600: '#ece9f6',
      700: '#f2f0f9',
      800: '#f2f0f9',
      900: '#f9f8fc',
    },
    secondary: {
      dark: '#e5defe',
      main: '#dad0fd',
      light: '#c4bbe4',
      50: '#dad0fd',
      100: '#ded5fd',
      200: '#e1d9fd',
      300: '#e5defe',
      400: '#e9e3fe',
      500: '#ede8fe',
      600: '#f0ecfe',
      700: '#f4f1fe',
      800: '#f8f6ff',
      900: '#fbfaff',
    },
    accent: {
      primary: '#e1edff',
      secondary: '#f6efff',
    },
    text: {
      primary: '#d1ccde',
      secondary: '#d6d4e0',
      disabled: '#fbfafd',
      50: '#8a898c',
      100: '#a1a0a3',
      200: '#b9b8ba',
      300: '#d0d0d1',
      400: '#e8e7e8',

      500: '#85888c',
      600: '#9da0a3',
      700: '#b6b8ba',
      800: '#cecfd1',
      900: '#e7e7e8',
    },
    grey: {
      50: '#bdbcc0',
      100: '#c4c3c6',
      200: '#cac9cd',
      300: '#d1d0d3',
      400: '#d7d7d9',
      500: '#dedee0',
      600: '#e5e4e6',
      700: '#ebebec',
      800: '#f2f2f2',
      900: '#f8f8f9',
    },
    background: {
      default: '#0a0712',
      paper: '#0a0712',
      50: '#0a0712',
      100: '#23202a',
      200: '#3b3941',
      300: '#545159',
      400: '#6c6a71',
      500: '#858389',
      600: '#9d9ca0',
      700: '#b6b5b8',
      800: '#cecdd0',
      900: '#e7e6e7',
    },
    success: {
      dark: '#d2f2dd',
      main: '#beedcf',
      light: '#abd5ba',
      // contrastText: '#151219',
      50: '#beedcf',
      100: '#c5efd4',
      200: '#cbf1d9',
      300: '#d2f2dd',
      400: '#d8f4e2',
      500: '#dff6e7',
      600: '#e5f8ec',
      700: '#ecfaf1',
      800: '#f2fbf5',
      900: '#f9fdfa',
    },
    error: {
      dark: '#fddadd',
      main: '#fccace',
      light: '#e3b6b9',
      // contrastText: '#ffffff',
      50: '#fccace',
      100: '#fccfd3',
      200: '#fdd5d8',
      300: '#fddadd',
      400: '#fddfe2',
      500: '#fee5e7',
      600: '#feeaeb',
      700: '#feeff0',
      800: '#fef4f5',
      900: '#fffafa',
    },
    info: {
      dark: '#d0e7fd',
      main: '#bcddfc',
      light: '#a9c7e3',
      // contrastText: '#ffffff',
      50: '#bcddfc',
      100: '#c3e0fc',
      200: '#c9e4fd',
      300: '#d0e7fd',
      400: '#d7ebfd',
      500: '#deeefe',
      600: '#e4f1fe',
      700: '#ebf5fe',
      800: '#f2f8fe',
      900: '#f8fcff',
    },
    warning: {
      dark: '#fff0cf',
      main: '#ffeaba',
      light: '#e6d3a7',
      // contrastText: '#151219',
      50: '#ffeaba',
      100: '#ffecc1',
      200: '#ffeec8',
      300: '#fff0cf',
      400: '#fff2d6',
      500: '#fff5dd',
      600: '#fff7e3',
      700: '#fff9ea',
      800: '#fffbf1',
      900: '#fffdf8',
    },

    // divider: '#8E959D3D',
    // contrastThreshold: 1,
    // tonalOffset: {
    //   light: 2,
    //   dark: 2,
    // },
  },
  typography: {
    fontFamily: 'Lato, sans-serif',
    h1: {
      fontSize: 32,
      fontWeight: 600,
      lineHeight: 1.5,
      margin: 0,
      letterSpacing: ' 0.04em',
      fontFamily: 'Nunito Sans, sans-serif',
    },
    h2: {
      fontSize: 28,
      fontWeight: 600,
      lineHeight: 1.2,
      margin: 0,
      fontFamily: 'Nunito Sans, sans-serif',
      letterSpacing: ' 0.04em',
    },
    h3: {
      fontSize: 24,
      fontWeight: 600,
      lineHeight: 1.0,
      margin: 0,
      letterSpacing: ' 0.04em',
    },
    h4: {
      fontSize: 22,
      fontWeight: 600,
      lineHeight: 0.9,
      letterSpacing: ' 0.04em',
    },
    h5: {
      fontSize: 18,
      fontWeight: 600,
      lineHeight: 0.6,
      letterSpacing: ' 0.04em',
    },
    h6: {
      fontSize: 16,
      fontWeight: 600,
      lineHeight: 0.5,
      letterSpacing: ' 0.04em',
    },
    button: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: '21px',
      textTransform: 'capitalize',
    },
    caption: {
      fontSize: 12,
      fontWeight: 400,
      lineHeight: '15px',
    },
    overline: {
      fontSize: 12,
      fontWeight: 400,
      lineHeight: '15px',
      textTransform: 'uppercase',
    },
  },
};

// #2D049A #8262F7 #D0B0FF #FBFAED #6AA6FF
//
// #D41121
// #FFBA1A
// #208ff4
// #F2F2F3 #C8CDD0 #415058 #1F292E
