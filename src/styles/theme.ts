const darktheme = {
  primary: {
    main: '#003366',
    light: '#006699',
    dark: '#000033',
  },
  secondary: {
    main: '#eee',
    light: '#fff',
    dark: '#ccc',
  },
  background: {
    main: '#fff',
    light: '#fff',
    dark: '#ccc',
  },
  white: '#fff',
  black: '#000',
  gray: {
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },

  green: {
    100: '#e0f2f1',
    200: '#b2dfdb',
    300: '#80cbc4',
    400: '#4db6ac',
    500: '#26a69a',
    600: '#009688',
    700: '#00897b',
    800: '#00796b',
    900: '#00695c',
  },
  error: '#f44336',
  warning: '#ff9800',
  info: '#2196f3',
  success: '#4caf50',
};

const lightTheme = {
  primary: {
    main: '#0084EC',
    light: '#1e98f5',
    dark: '#0067B8',
  },
  secondary: {
    main: '#eee',
    light: '#fff',
    dark: '#1E4885',
  },
  background: {
    main: '#fff',
    light: '#fff',
    dark: '#ccc',
  },
  white: '#fff',
  black: '#000',
  gray: {
    100: '#F4F5F7',
    200: '#E9ECEE',
    300: '#DEE2E6',
    400: '#C6CCD2',
    500: '#ADB5BD',
    550: '#8C959D',
    600: '#6C757D',
    700: '#50585E',
    800: '#343A40',
    900: '#1A1D20',
  },
  green: {
    100: '#D1E7DD',
    200: '#A3CFBB',
    300: '#75B798',
    400: '#609D80',
    500: '#4A8369',
    600: '#356A51',
    700: '#1F503A',
    800: '#0A3622',
    900: '#051B11',
  },
  error: '#f44336',
  warning: '#ff9800',
  info: '#2196f3',
  success: '#4caf50',
};

// const defaultTheme = {
//   fontSize: {
//     xs: '1.2rem',
//     sm: '1.4rem',
//     md: '1.6rem',
//     lg: '1.8rem',
//   },
//   borderRadius: {
//     small: '0.5rem',
//     medium: '1.0rem',
//     large: '1.5rem',
//     circle: '50%',
//   },
// };

const theme = {
  ehive: {
    dark: {
      color: darktheme,
      // ...defaultTheme,
    },
    light: {
      color: lightTheme,
      // ...defaultTheme,
    },
  },
};

export default theme;
