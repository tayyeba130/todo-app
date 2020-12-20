import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --bright-blue: hsl(220, 98%, 61%);
        --light-300: hsl(0, 0%, 98%);
        --light-400: hsl(236, 33%, 92%);
        --light-500: hsl(233, 11%, 84%);
        --light-600: hsl(236, 9%, 61%);
        --light-700: hsl(235, 19%, 35%);
    }
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
