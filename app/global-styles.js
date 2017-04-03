import { injectGlobal } from 'styled-components';
import config from 'config';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: Roboto, sans-serif;
  }

  #app {
    background-color: #fff;
    min-height: 100%;
    min-width: 100%;
  }
  
  .container {
    max-width: ${config.maxWidth};
    padding: 0 15px;
    margin: auto;
  }
  
  p {
    font-family: Lora, serif;
  }
`;
