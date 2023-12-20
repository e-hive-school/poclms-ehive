/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Do not edit directly
 * Generated on Sat, 16 Dec 2023 04:45:13 GMT
 */

export default tokens;

declare interface DesignToken {
  value: any;
  name?: string;
  comment?: string;
  themeable?: boolean;
  attributes?: {
    category?: string;
    type?: string;
    item?: string;
    subitem?: string;
    state?: string;
    [key: string]: any;
  };
  [key: string]: any;
}

declare const tokens: {
  color: {
    arrow: DesignToken;
    primary: {
      main: DesignToken;
      dark: DesignToken;
      light: DesignToken;
    };
    secondary: {
      main: DesignToken;
      dark: DesignToken;
      light: DesignToken;
    };
    success: DesignToken;
    danger: DesignToken;
    warning: DesignToken;
    info: DesignToken;
    gray: {
      '100': DesignToken;
      '200': DesignToken;
      '300': DesignToken;
      '400': DesignToken;
      '500': DesignToken;
      '600': DesignToken;
      '700': DesignToken;
      '800': DesignToken;
      '900': DesignToken;
    };
    white: DesignToken;
    black: DesignToken;
    blue: {
      '100': DesignToken;
      '200': DesignToken;
      '300': DesignToken;
      '400': DesignToken;
      '500': DesignToken;
      '600': DesignToken;
      '700': DesignToken;
      '800': DesignToken;
      '900': DesignToken;
    };
    indigo: {
      '100': DesignToken;
      '200': DesignToken;
      '300': DesignToken;
      '400': DesignToken;
      '500': DesignToken;
      '600': DesignToken;
      '700': DesignToken;
      '800': DesignToken;
      '900': DesignToken;
    };
    purple: {
      '100': DesignToken;
      '200': DesignToken;
      '300': DesignToken;
      '400': DesignToken;
      '500': DesignToken;
      '600': DesignToken;
      '700': DesignToken;
      '800': DesignToken;
      '900': DesignToken;
    };
    pink: {
      '100': DesignToken;
      '200': DesignToken;
      '300': DesignToken;
      '400': DesignToken;
      '500': DesignToken;
      '600': DesignToken;
      '700': DesignToken;
      '800': DesignToken;
      '900': DesignToken;
    };
    red: {
      '100': DesignToken;
      '200': DesignToken;
      '300': DesignToken;
      '400': DesignToken;
      '500': DesignToken;
      '600': DesignToken;
      '700': DesignToken;
      '800': DesignToken;
      '900': DesignToken;
    };
    orange: {
      '100': DesignToken;
      '200': DesignToken;
      '300': DesignToken;
      '400': DesignToken;
      '500': DesignToken;
      '600': DesignToken;
      '700': DesignToken;
      '800': DesignToken;
      '900': DesignToken;
    };
    yellow: {
      '100': DesignToken;
      '200': DesignToken;
      '300': DesignToken;
      '400': DesignToken;
      '500': DesignToken;
      '600': DesignToken;
      '700': DesignToken;
      '800': DesignToken;
      '900': DesignToken;
    };
    green: {
      '100': DesignToken;
      '200': DesignToken;
      '300': DesignToken;
      '400': DesignToken;
      '500': DesignToken;
      '600': DesignToken;
      '700': DesignToken;
      '800': DesignToken;
      '900': DesignToken;
    };
    teal: {
      '100': DesignToken;
      '200': DesignToken;
      '300': DesignToken;
      '400': DesignToken;
      '500': DesignToken;
      '600': DesignToken;
      '700': DesignToken;
      '800': DesignToken;
      '900': DesignToken;
    };
    cyan: {
      '100': DesignToken;
      '200': DesignToken;
      '300': DesignToken;
      '400': DesignToken;
      '500': DesignToken;
      '600': DesignToken;
      '700': DesignToken;
      '800': DesignToken;
      '900': DesignToken;
    };
  };
  font: {
    fontFamily: {
      primary: DesignToken;
      secondary: DesignToken;
    };
    fontSizes: {
      xs: DesignToken;
      sm: DesignToken;
      base: DesignToken;
      lg: DesignToken;
      xl: DesignToken;
      '2xl': DesignToken;
      '3xl': DesignToken;
      '4xl': DesignToken;
      '5xl': DesignToken;
    };
    fontWeights: {
      light: DesignToken;
      normal: DesignToken;
      medium: DesignToken;
      semibold: DesignToken;
      bold: DesignToken;
      extrabold: DesignToken;
      black: DesignToken;
    };
    lineHeights: {
      tight: DesignToken;
      snug: DesignToken;
      normal: DesignToken;
      relaxed: DesignToken;
      loose: DesignToken;
    };
    letterSpacings: {
      tighter: DesignToken;
      tight: DesignToken;
      normal: DesignToken;
      wide: DesignToken;
      wider: DesignToken;
      widest: DesignToken;
    };
    textStyles: {
      heading1: DesignToken;
      heading2: DesignToken;
      heading3: DesignToken;
      heading4: DesignToken;
    };
  };
  boxShadow: {
    small: DesignToken;
    medium: DesignToken;
    large: DesignToken;
  };
  spacing: {
    size: {
      none: DesignToken;
      xxs: DesignToken;
      xs: DesignToken;
      sm: DesignToken;
      md: DesignToken;
      lg: DesignToken;
      xl: DesignToken;
      '2xl': DesignToken;
      '3xl': DesignToken;
      '4xl': DesignToken;
      '5xl': DesignToken;
      '6xl': DesignToken;
      '7xl': DesignToken;
    };
    layout: {
      container: {
        sm: DesignToken;
        md: DesignToken;
        lg: DesignToken;
        xl: DesignToken;
      };
      gutter: {
        sm: DesignToken;
        md: DesignToken;
        lg: DesignToken;
        xl: DesignToken;
      };
    };
  };
  small: DesignToken;
  medium: DesignToken;
  large: DesignToken;
};
