import styled from "styled-components";

export const StyledCard = styled.div`
    height: 290px;
    min-height: 230px
    min-width: 230px;
    padding: 10px 0;
    margin-right: 20px;
    border: 1px solid #707070;
    background: #000;
`

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-evenly;
    height: 90%;
    margin: 10px auto;
    padding: 15px 10px;
    background: ${({bg}) => bg }
`

export const ImageContainer = styled.div`
    max-width: 164px;
    min-width: 130px;
    padding: 5px auto;
    background: #0000
`

export const CardImage = styled.img`
    max-width: 164px;
    min-width: 130px;
`
export const CardLabel = styled.h3`
    font-weight: 700;
    font-size: 16px;
    color: #FFFFFF;
    line-height: 19px;
    letter-spacing: 0.04em;
    margin-bottom: 3px;
`
export const CardDescription = styled.p`
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    color: rgba(255, 255, 255, 0.9);
    padding-bottom: 10px
`