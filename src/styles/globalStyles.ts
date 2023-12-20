import { createGlobalStyle, css } from 'styled-components';

import theme from './tokens/js/tokens';

export type GlobalStyleProps = {
  theme: typeof theme;
};

const GlobalStyles = createGlobalStyle`
  *,
  ::before,
  ::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 1.5;
    background-repeat: no-repeat;
  }

  ::before,
  ::after {
    text-decoration: inherit;
    vertical-align: inherit;
  }

   ${({ theme }) => css`
     html {
       font-size: 62.5%;
     }

     body {
       background-color: ${theme.color.primary.main};
       color: ${theme.color.primary.main};
       cursor: default;
       font-family: 'Inter', sans-serif;
       font-size: 1.6rem;
       line-height: 1.5;
       margin: 0;
       position: relative;
       tab-size: 4;
       word-break: break-word;

       -moz-osx-font-smoothing: grayscale;
       -moz-tab-size: 4;
       -ms-text-size-adjust: 100%;
       -webkit-font-smoothing: antialiased;
       -webkit-tap-highlight-color: transparent;
       -webkit-text-size-adjust: 100%;

       * {
         line-height: inherit;
       }
     }

     a {
       color: ${theme.color.secondary.main};
       transition: 150ms color;
       text-decoration: none;
       cursor: pointer;
       &:hover,
       &:focus {
         color: ${theme.color.secondary.light};
         text-decoration: none;
       }
     }

     button,
     input,
     select {
       margin: 0;
       font-family: 'Inter', sans-serif;
     }

     button {
       padding: 0;
       border: none;
       background: none;
     }

     button,
     [type='button'],
     [type='reset'],
     [type='submit'] {
       cursor: pointer;
       -webkit-appearance: none;
       -moz-appearance: none;
     }

     input,
     textarea,
     button,
     select,
     a {
       -webkit-tap-highlight-color: transparent;
     }

     dl dl,
     dl ol,
     dl ul,
     ol dl,
     ul dl {
       margin: 0;
     }

     ol ol,
     ol ul,
     ul ol,
     ul ul {
       margin: 0;
     }

     main {
       display: block;
     }

     nav ol,
     nav ul {
       list-style: none;
       padding: 0;
     }

     img {
       border-style: none;
     }

     audio,
     canvas,
     iframe,
     img,
     svg,
     video {
       vertical-align: middle;
     }

     svg:not([fill]) {
       fill: currentColor;
     }

     table {
       border-collapse: collapse;
     }
   `}
`;

export default GlobalStyles;
