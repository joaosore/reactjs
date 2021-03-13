import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Chakra+Petch:300,300i,400,400i,500,500i,600,600i,700,700i');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    font-size: 16px;
    background-color: #090909;
    font-family: 'Chakra Petch', sans-serif;
    font-weight: 100;
    color: #FFF;
  }

  button {
    cursor: pointer;
  }

  .dev {
    font-weight: 300;
    color: #36BFF4;
  }

  .eng {
    font-weight: 300;
    color: #64DDB8;
  }

  a {
    color: #FFF;
    text-decoration: none;
    font-weight: 400;
    cursor: pointer;
  }

  h1 {
    font-size: 3.125em;
    font-weight: 400;
  }

  h2 {
    font-size: 2.5em;
    font-weight: 400;
  }

`;
