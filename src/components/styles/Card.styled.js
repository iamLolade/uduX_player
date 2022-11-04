import styled from "styled-components";

export const StyledCard = styled.div`
    height: 290px;
    min-width: 230px;
    padding: 10px 0;
    margin-right: 20px;
    border: 1px solid #707070;
    background: #000;
`

export const CardContent = styled.div`
    height: 90%;
    margin: 10px auto;
    background: ${({bg}) => bg }
`