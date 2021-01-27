import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    color: #E0E0E0;
  }

  @font-face{
    font-family: Anton;
    src: url("../fonts/anton-regular.ttf");
  }

  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Anton;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
