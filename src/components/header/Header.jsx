import { StyledHeader, Image, Input } from "../styles/Header.styled";
import { Flex } from "../styles/Flex.styled";

const Header = () => {
    return (
        <StyledHeader>
            <Flex>
                <div>
                    <Image src="./icons/arrow-left.svg" alt="Left arrow" />
                    <Image src="./icons/arrow-right.svg" alt="Right arrow" />
                </div>
                <Input />
            </Flex>
        </StyledHeader>
    );
}
 
export default Header;