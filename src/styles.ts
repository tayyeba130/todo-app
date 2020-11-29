import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }
    html, body {
        margin: 0;
    }
    body {
        font-family: 'Josefin Sans', sans-serif;        
    }
    h1, h2, h3 {
        font-family: 'Open Sans', sans-serif;
    }
    .container {
        width: 100%;
        max-width: 540px;
        margin: 0 auto;
    }
`;

export default GlobalStyle;
