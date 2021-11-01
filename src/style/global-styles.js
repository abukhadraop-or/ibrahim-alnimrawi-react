import { createGlobalStyle } from 'styled-components';

/* istanbul ignore next */
const GlobalStyle = createGlobalStyle`
  body {
    font-family: Serif;
    *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  padding: 0;
  margin: 0;
  }
`;

export default GlobalStyle;
