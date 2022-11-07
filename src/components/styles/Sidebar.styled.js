import styled from 'styled-components'

export const StyledSidebar = styled.div`
    display: flex;
    flex-direction: column;
    width: 18%;
    height: 100vh;
    background: #020202;
    background-image: url('./backgroundImage.svg');
    padding: 0 20px;
    margin: 0 auto;
    overflow: auto;
`

export const Profile = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    background: #0F0F0F;
    padding: 10px;
    height: 10%;
`
export const Avatar = styled.img`
    min-width: 60px;
    border-radius: 50%;
`
export const Icon = styled.img`
    width: 16px;
    height: 18px;
    margin-right: 8px;
`

export const Nav = styled.div`
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: ${({ border }) => border}
`

export const NavLink = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    color: #D9D9D9;
    font-size: 16px;
    cursor: pointer;
    margin: 5px 0;
    font-weight: 600;

    &:hover {
        color: #FBBA12;
        transform: scale(1.06);
        border: 0.5px solid #0F0F0F;
        border-radius: 3em;
        
    }
`

export const SecondaryLink = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    color: #D9D9D9;
    font-size: 12px;
    cursor: pointer;
    
    font-weight: 500;
    padding: 8px 0;

    &:hover {
        color: #FBBA12;
        transform: scale(1.06);
        border: 0.5px solid #0F0F0F;
        border-radius: 3em;
        padding: 8px;
    }
`

export const Divider = styled.div`
    border: 0.5px solid #282828;
`