import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

  * {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;
