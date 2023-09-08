import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --red-300: #FF6666;
        --red-600: #FF4C4C;
        --red-900: #B32424;

        --font-black: #1c1c1c;
        --font-white: #fff;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        // 1rem = 16px
        @media(max-width: 1080px){
            font-size: 93.75%; // 1rem = 15px
        }
        @media(max-width: 720px){
            font-size: 87.5%; // 1rem = 14px
        }
    }
`
;