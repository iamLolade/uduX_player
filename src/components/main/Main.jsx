import { StyledMain, Banner, MainText, Content } from "../styles/Main.styled";

const Main = () => {
    return (
        <StyledMain>
            <Banner src='./icons/banner.svg' alt='Banner' />
            <Content>
                <MainText>
                    Welcome Back!
                </MainText>
            </Content>
        </StyledMain>
    );
}
 
export default Main;