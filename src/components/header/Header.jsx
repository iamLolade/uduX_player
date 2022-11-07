import { StyledHeader, Image, Input } from "../styles/Header.styled";
import { Flex } from "../styles/Flex.styled";
import { Avatar } from "../styles/Sidebar.styled";
import arrow_left from "../../public/icons/arrow-left.svg";
import arrow_right from "../../public/icons/arrow-right.svg";
import IsMobile from "../../utils/IsMobile";

const Header = () => {
    const isMobile = IsMobile();

    return (
        <StyledHeader>
            <Flex>
                {!isMobile ? 
                <>
                    <div>
                        <Image src={arrow_left} alt="Left arrow" />
                        <Image src={arrow_right} alt="Right arrow" />
                    </div>
                    <Input />
                </> : <Avatar src='./icons/avatar.svg' alt='Avatar'/>}
            </Flex>
        </StyledHeader>
    );
}
 
export default Header;