import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --bright-blue-300: hsl(220, 98%, 61%);
        --bright-blue-400: hsl(235, 21%, 11%);
        --bright-blue-500: hsl(235, 24%, 19%);
        --light-300: hsl(0, 0%, 98%);
        --light-400: hsl(236, 33%, 92%);
        --light-500: hsl(233, 11%, 84%);
        --light-600: hsl(236, 9%, 61%);
        --light-700: hsl(235, 19%, 35%);
        --dark-300: hsl(234, 39%, 85%);
        --dark-400: hsl(236, 33%, 92%);
        --dark-500: hsl(234, 11%, 52%);
        --dark-600: hsl(233, 14%, 35%);
        --dark-700: hsl(237, 14%, 26%);
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
