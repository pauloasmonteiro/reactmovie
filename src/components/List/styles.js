import styled from "styled-components";

export const CardsList = styled.div `
    display: flex;
    flex-wrap: wrap;
    gap: 30px; 
    margin: 20px 0;
`

export const CartsItem = styled.div `
    max-width: 260px;
    position: relative;
    img{
        border-radius: 10px;
        opacity: 0.7;
        &:hover{
            opacity: 1;
        }
    }
`

export const CardsContent = styled.div `
    bottom: 15px;
    left: 15px;
    position: absolute; //posição em relação ao elemento pai
    color: #ffffff;
    text-shadow: 1px 1px 1px black;
    
    h2{
        font-size: 24px;
    }

    h3{
        font-size: 16px;
    }

    span{
        font-size: 16px;
        font-weight: bold;
        color: #FAFF00;
    }

    button{
        background-color: #000E2A;
        color: white;
        border: none;
        padding: 10px 258px;
        border-radius: 5px;
        cursor: pointer;

        &:hover{
            background-color: #00b1e9;
        }
    }
`