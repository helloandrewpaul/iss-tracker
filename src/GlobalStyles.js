import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  *,
  *:before,
  *:after {
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      
  }
  
  html, body, div,
  input, button, select, option,
  h1, h2, h3, h4, h5, h6, p,
  text {
    font-family: 'DM Sans', sans-serif;
    color:#fff;
    margin:0;
  }`;
