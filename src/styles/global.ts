import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
--background:#E9E9E9;
--blue: #186DC3;
--grey: #575757;
--red: #F00000;
--background-header: #FFFFFF;
--white: #FFFFFF;
--grey-light:#FCFCFC;
}
*{
    margin:0; padding:0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
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
    font-weight: 500;
}
body{
    -webkit-font-smoothing: antialiased;
    background: var(--background);
    font-weight: 400;
}


.react-overlay-modal {
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color:rgba(0, 0, 0, 0.50);
    align-items: center;
 justify-content: center ; display: flex; 
 cursor: pointer;
  }
  
 .react-content-modal{
      position:relative;
      top: 0px;
      left: 40px;
      right: 40px;
      bottom: 40px;
      border: 1px solid #ccc;
      background: var(--background);
      overflow: auto;
      border-radius: 4px;
      --webkit-overflow-scrolling: touch;
      outline: none;
      padding: 3rem;
      width: 100%;
      max-width: 540px;
      
    }

`;
