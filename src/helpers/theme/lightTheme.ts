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

export const lightTheme: ThemeOptions = {
  palette: {
    mode: 'light',
    common: {
      black: '#17171f',
      white: '#ffffff',
      transparent: 'transparent',
    },
    primary: {
      dark: '#28048b',
      main: '#2c049a',
      light: '#8068c2',
      900: '#2c049a',
      800: '#411da4',
      700: '#5636ae',
      600: '#6b4fb8',
      500: '#8068c2',
      400: '#9682cd',
      300: '#ab9bd7',
      200: '#c0b4e1',
      100: '#d5cdeb',
      50: '#eae6f5',
    },
    secondary: {
      dark: '#7558de',
      main: '#8262f7',
      light: '#9b81f9',
      900: '#8262f7',
      800: '#8f72f8',
      700: '#9b81f9',
      600: '#a891f9',
      500: '#b4a1fa',
      400: '#c1b1fb',
      300: '#cdc0fc',
      200: '#dad0fd',
      100: '#e6e0fd',
      50: '#f3effe',
    },
    accent: {
      primary: '#6AA6FF',
      secondary: '#D0B0FF',
    },
    text: {
      primary: '#1b025c',
      secondary: '#342763',
      disabled: '#eae6f5',
      900: '#151219',
      800: '#2a2333',
      700: '#3e354c',
      600: '#534666',
      500: '#685880',

      400: '#0b1119',
      300: '#152133',
      200: '#20324c',
      100: '#2a4266',
      50: '#355380',
    },
    grey: {
      900: '#241f2e',
      800: '#3a3543',
      700: '#504c58',
      600: '#66626d',
      500: '#7c7982',
      400: '#928f97',
      300: '#a7a5ab',
      200: '#bdbcc0',
      100: '#d3d2d5',
      50: '#e9e9ea',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
      900: '#fbfaed',
      800: '#fbfbef',
      700: '#fcfbf1',
      600: '#fcfcf2',
      500: '#fdfcf4',
      400: '#fdfdf6',
      300: '#fdfdf8',
      200: '#fefefa',
      100: '#fefefb',
      50: '#fffffd',
    },
    success: {
      dark: '#1e9d4d',
      main: '#25C460',
      light: '#7cdca0',
      contrastText: '#ffffff',
      900: '#25c460',
      800: '#3bca70',
      700: '#51d080',
      600: '#66d690',
      500: '#7cdca0',
      400: '#92e2b0',
      300: '#a8e7bf',
      200: '#beedcf',
      100: '#d3f3df',
      50: '#e9f9ef',
    },
    error: {
      dark: '#c33f48',
      main: '#f44f5a',
      light: '#f7848c',
      // contrastText: '#ffffff',
      900: '#f44f5a',
      800: '#f5616b',
      700: '#f6727b',
      600: '#f7848c',
      500: '#f8959c',
      400: '#faa7ad',
      300: '#fbb9bd',
      200: '#fccace',
      100: '#fddcde',
      50: '#feedef',
    },
    info: {
      dark: '#1a72c3',
      main: '#208ff4',
      light: '#63b1f7',
      // contrastText: '#ffffff',
      900: '#208ff4',
      800: '#369af5',
      700: '#4da5f6',
      600: '#63b1f7',
      500: '#79bcf8',
      400: '#90c7fa',
      300: '#a6d2fb',
      200: '#bcddfc',
      100: '#d2e9fd',
      50: '#e9f4fe',
    },
    warning: {
      dark: '#cc9515',
      main: '#FFBA1A',
      light: '#FF980E',
      contrastText: '#151219',
      900: '#FFBA1A',
      800: '#ffc131',
      700: '#ffc848',
      600: '#ffcf5f',
      500: '#ffd676',
      400: '#ffdd8d',
      300: '#ffe3a3',
      200: '#ffeaba',
      100: '#fff1d1',
      50: '#fff8e8',
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
      // lineHeight: 1.5,
      margin: 0,
      letterSpacing: ' 0.04em',
      fontFamily: 'Nunito Sans, sans-serif',
    },
    h2: {
      fontSize: 28,
      fontWeight: 600,
      // lineHeight: 1.2,
      margin: 0,
      fontFamily: 'Nunito Sans, sans-serif',
      letterSpacing: ' 0.04em',
    },
    h3: {
      fontSize: 24,
      fontWeight: 600,
      // lineHeight: 1.0,
      margin: 0,
      letterSpacing: ' 0.04em',
    },
    h4: {
      fontSize: 22,
      fontWeight: 600,
      // lineHeight: 0.9,
      letterSpacing: ' 0.04em',
    },
    h5: {
      fontSize: 18,
      fontWeight: 600,
      // lineHeight: 0.6,
      letterSpacing: ' 0.04em',
    },
    h6: {
      fontSize: 16,
      fontWeight: 600,
      // lineHeight: 0.5,
      letterSpacing: ' 0.04em',
    },
    button: {
      fontSize: 14,
      fontWeight: 500,
      // lineHeight: '21px',
      textTransform: 'capitalize',
    },
    caption: {
      fontSize: 12,
      fontWeight: 400,
      // lineHeight: '15px',
    },
    overline: {
      fontSize: 12,
      fontWeight: 400,
      // lineHeight: '15px',
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

//text
// #0E1824 //
// #101012
// #353448 // Titles (login, Sign)
// #0F0B11
// #262C33
// #3D3D3D
// #484759 // labels
// #5C6266
// #71707E
// #707070
// #9999A3
// #888888
// #B9B9B9
// #C2C1C7
// #CACACA
// #C2C2C2
// #CCCCCC

// #0000000A
// #00000014
// #00000029
// #00000066
// #0000001F
// #E6E6E6E6

// #F8F8F8
// #EFEEFB
// #EBEBEB
// #F1F1F1
// #F3F2FF
// #F0F0F0
// #F5F5F5
// #E3E3E3
// #F7F7F7
// #E0E0E0
// #EAEAEA
// #D7D7D7

// #665CD7
//#1B1558
//#30287E
