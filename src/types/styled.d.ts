import 'styled-components';
interface ColorWeight {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

interface ColorDefinition {
  main: string;
  light: string;
  dark: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary: ColorDefinition;
      secondary: ColorDefinition;
      white: string;
      black: string;
      gray: ColorWeight;
      green: ColorWeight;
      error: string;
      warning: string;
      info: string;
      success: string;
      background: ColorDefinition;
    };
    // fontSize: {
    //   xs: string;
    //   sm: string;
    //   md: string;
    //   lg: string;
    // };
    // borderRadius: {
    //   small: string;
    //   medium: string;
    //   large: string;
    //   circle: string;
    // };
  }
}
