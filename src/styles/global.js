import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    color: #E0E0E0;
  }

  span{
    color: #E0E0E0;
    font-size: 30px;
  }

  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Anton', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
