import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
--background:#E9E9E9;
--blue: #186DC3;
--grey: #575757;
--red: #F00000;
--background-header: #FFFFFF;
--white: #FFFFFF;


}
*{
    margin:0; padding:0;
    box-sizing: border-box;
}
html{
    @media(max-width:1080px){
font-size:93.75%;
    }
    @media(max-width:720px){
font-size:87.5%;
        
    }
}

button{
    cursor: pointer;
}
[disabled]{
    opacity: 0.6;
    cursor: not-allowed;
}
h1,h2,h3,h4,h5,h6 {

    font-weight: 400;
}
body{
    -webkit-font-smoothing: antialiased;
    background: var(--background);
}

`;
