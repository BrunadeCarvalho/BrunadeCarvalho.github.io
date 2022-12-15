import styled from "styled-components";

export const FooterStyled=styled.footer`
    width: 100vw;
    height: 30vh;
    background-image: linear-gradient(white, #FA94C7); 
    font-family: 'PT Sans', sans-serif;
    position: fixed;
    bottom: 0;
`

export const DivContato=styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    p{
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        color: var(--pink);
        display: flex;
        padding: 0 5px 30px;
    }

    a{
        text-decoration:none
    }

`
