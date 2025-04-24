import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --navy: ${props => props.theme.colors.background};
    --navy-shadow: rgba(2, 12, 27, 0.7);
    --background: ${props => props.theme.colors.background};
    --light-text: ${props => props.theme.colors.lightText};
    --text: ${props => props.theme.colors.text};
    --highlight: ${props => props.theme.colors.highlight};
    --font-mono: ${props => props.theme.fonts.mono};
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--background);
    color: var(--light-text);
    font-family: ${props => props.theme.fonts.main};
    font-size: 16px;
    line-height: 1.3;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyles;