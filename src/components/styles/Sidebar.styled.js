import styled from 'styled-components'

export const StyledSidebar = styled.div`
    display: flex;
    flex-direction: column;
    width: 18%;
    height: 100vh;
    background: #020202;
    padding: 0 15px;
    margin: 0 auto;
    overflow: auto;
`

export const Profile = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    margin: 0 auto;
    background: #0F0F0F;
    padding: 0 10px;
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
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    margin-left: 20px;
`

export const SecondaryLink = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    color: #D9D9D9;
    font-size: 14px;
    cursor: pointer;
    margin: 5px 0;
    font-weight: 500;
    margin-left: 20px;
`

export const Divider = styled.div`
    border: 0.5px solid #282828;
`