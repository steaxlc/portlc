import { createGlobalStyle } from "styled-components";



const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background: #1C1D25;
    color: white;

}

button{
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    background: transparent;
    color: white;
}
`;

export default GlobalStyle;