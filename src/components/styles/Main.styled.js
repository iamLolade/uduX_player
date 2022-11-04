import styled from 'styled-components'

export const StyledMain = styled.div`
    display: flex;
    flex-direction: column;
    height: 90vh;
    background: #000;
    padding: 0 20px;
    margin: 0 auto;
    overflow: auto;
    padding-bottom: 20px;

    @media (max-width: 768px) {
        width: 100%
    }
`

export const Banner = styled.img`
    margin: 0 auto;
`
export const Content = styled.div`
    padding: 0 30px;
`
export const MainText = styled.h3`
    font-weight: 700;
    font-size: 28px;

    @media (max-width: 768px) {
        font-size: 18px;
    }
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    overflow: auto
`