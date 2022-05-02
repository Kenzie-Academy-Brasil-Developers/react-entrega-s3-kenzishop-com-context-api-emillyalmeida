import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

:root{
    --blue-dark: #293241;
    --blue-medium:#3d5a80;
    --blue-ligth:#98c1d9;
    --blue-white:#e0fbfc;
    --mostarda:#ee6c4d;
    --white:#fff
}

body{
  background-color: var(--blue-ligth);
  font-family: "Inter", serif;
  height: 100vh;
  width: 100vw;
  list-style: none;
    
}

h1,h2,h3,h4{
    font-weight: 700;
}

button{
    cursor: pointer;
    font-family: "Inter", serif;
}

::-webkit-scrollbar {
display: none;
}

`;
