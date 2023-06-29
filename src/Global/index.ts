import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

*, *::before, *:after {
    -webkit-tap-highlight-color: transparent;
}
    

html {
    font-family: 'Kumbh Sans', sans-serif;
    font-style: normal;
}

body {
    max-width: 100vw;
    height: 100vh;
}

h1 {
    color: #1D2026;
    font-size: 44px;
    font-weight: 700;
    line-height: 48px;
}

h2 {
    color: #B6BCC8;
    font-size: 16px;
    font-weight: 700;
    line-height: 26px;
}

p  {
    color: #69707D;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
}

a {
    color: #69707D;
    font-size: 15px;
    font-weight: 400;
    line-height: 26px;
}

a {
    text-decoration: none;
}
  

input,
fieldset,
button {
    border: unset;
    outline: unset;
}



`;

export default GlobalStyles;
