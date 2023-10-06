import styled from "styled-components";

export const CardHomeStyle = styled.div `
    max-width: 850px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    position: relative;
    top: -30px;
    img{
        opacity: 0.7;
        &:hover{
            opacity: 1;
        }
    }
    @media (max-width: 900px){
        flex-direction: column;
        align-items: center;
        row-gap: 20px;
    }
`