import styled from "styled-components";

export const BannerDetalhes = styled.div `
    height: 500px;

    background-size: cover;
    background-attachment: fixed;
`

export const Content = styled.div `
    max-width: 850px;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.50);
    backdrop-filter: blur(11.5px);
    color: white;
    margin: 0 auto;
    position: relative;
    top: -250px;
    padding: 30px;
    display: flex;
    align-items: center;
    column-gap: 30px;

    ul{
        list-style-position: inside;
        margin: 15px 0;
    }

    p{
        margin-bottom: 15px;
    }

    button{
        background-color: #000E2A;
        color: white;
        border: none;
        padding: 10px 40px;
        border-radius: 5px;
        cursor: pointer;

        &:hover{
            background-color: #00b1e9;
        }
    }
`