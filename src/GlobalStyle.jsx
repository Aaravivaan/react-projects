import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Work Sans', sans-serif;

}

html{
    font-size:62.5%;
    overflow-x:hidden;
}

h1{
    font-size:6rem;
    font-weight:900;
    colors:${({theme})=>theme.colors.heading};
}

h2{
    colors:${({theme})=>theme.colors.heading};
    font-size:3rem;
    font-weight:300;
    white-space:normal;
    text-align:center;
}

h3{
    font-size:1.8rem;
    font-weight:400;
}

p{
    colors:${({theme})=>theme.colors.text};
    opacity:.7;
    font-size:1.66rem;
    line-height:1.5;
    margin-top:1rem;
    font-weight:400;
}

a{
    text-decoration:none;
}

li{
    list-style:none;
}

.container{
    max-width:120rem;
    margin: 0 auto;
}

.grid{
    display:grid;
    gap:9rem;
}
.grid-col-2{
    grid-template-columns: repeat(2, 1fr);
}

.grid-col-3{
    grid-template-columns: repeat(3, 1fr);
}

.grid-col-4{
    grid-template-columns: 1fr 1.2fr .5fr .8fr;
}
`;
