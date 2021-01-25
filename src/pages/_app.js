import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
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

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
