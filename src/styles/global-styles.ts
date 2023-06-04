import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    box-sizing:border-box;
    padding:0;
    margin:0;
    border:0;
    vertical-align:baseline;
    list-style:none;
    text-decoration: none;
}

html {
    font-size: 62.5%;
    font-family: 'Inter', 'Roboto', 'sans-serif';
    background-color: #F5F5F5;
}
`;
