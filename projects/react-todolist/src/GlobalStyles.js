import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;600;800&family=Merienda+One&display=swap');
*{
  margin: 0;
  padding: 0;
}

*,
*::before, 
*::after{
  box-sizing: inherit;
}

html{
  box-sizing: border-box;
  font-size: 62.5%;
}

body{
  font-family: 'Fira Sans', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  background-color: #E0FBFC;
  color: #293241;
  
}
h1{
  font-family: 'Merienda One', cursive;
  color: #3D5A80;
  font-weight: 800;
}
`;

export default GlobalStyle;
