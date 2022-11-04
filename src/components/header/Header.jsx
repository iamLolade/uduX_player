import { StyledHeader, Image, Input } from "../styles/Header.styled";
import { Flex } from "../styles/Flex.styled";
import { Avatar } from "../styles/Sidebar.styled";
import IsMobile from "../../utils/IsMobile";

const Header = () => {
    const isMobile = IsMobile();

    return (
        <StyledHeader>
            <Flex>
                {!isMobile ? 
                <>
                    <div>
                        <Image src="./icons/arrow-left.svg" alt="Left arrow" />
                        <Image src="./icons/arrow-right.svg" alt="Right arrow" />
                    </div>
                    <Input />
                </> : <Avatar src='./icons/avatar.svg' alt='Avatar'/>}
            </Flex>
        </StyledHeader>
    );
}
 
export default Header;