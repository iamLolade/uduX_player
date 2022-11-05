import { StyledSidebar, Profile, Avatar, Divider, Nav, NavLink, SecondaryLink } from "../styles/Sidebar.styled";
import { nav, secondaryNav } from "./navs/nav";

const Sidebar = () => {
    return (
        <StyledSidebar>
            <Profile>
                <Avatar src='./icons/avatar.svg' alt='Avatar' />
                <p>Hey! Aleem</p>
            </Profile>
            <Nav>
                {nav?.map((nav, index) => (
                    <NavLink key={index}>
                        {nav.icon}
                        {nav.name}
                    </NavLink>
                ))}
                <Divider />
            </Nav>
            <Nav border='0.5px solid #282828'>
                {secondaryNav?.map((nav, index) => (
                    <SecondaryLink key={index}>
                        {nav.name}
                    </SecondaryLink>
                ))}
            </Nav>
        </StyledSidebar>
    );
}
 
export default Sidebar;