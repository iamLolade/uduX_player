import styled from 'styled-components'

export const StyledHeader = styled.div`
    display: flex;
    height: 10%;
    background: #000;
    padding: 0 20px;
    margin: 0 auto;
`

export const Image = styled.img`
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    transform: scale(1.11);
    border-radius: 3px;
  }
`

export const Input = styled.input`
    background: #000;
    border: 1px solid #0F0F0F;
    width: 471px;
    height: 56px; 
`