import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  input {
    all: unset;
  }

  button {
    all: unset;
    cursor: pointer;
  }

  a {
    all: unset;
    cursor: pointer
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${({ theme }) => theme.colors.gray[2]};
  }


  body {
    font-size: '1rem';
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    letter-spacing: .3px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.colors.background[2]};
    color: grey;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
    color: #7cd4f1;
    font: inherit;
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
`;
