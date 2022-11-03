import { StyledHeader, Image } from "../styles/Header.styled";
import { Flex } from "../styles/Flex.styled";
import { Input } from 'antd';

const Header = () => {
    return (
        <StyledHeader>
            <Flex>
                <div>
                    <Image src="./icons/arrow-left.svg" alt="Left arrow" />
                    <Image src="./icons/arrow-right.svg" alt="Right arrow" />
                </div>
                <Input size='large'/>
            </Flex>
        </StyledHeader>
    );
}
 
export default Header;