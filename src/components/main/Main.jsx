import { StyledMain, Banner, MainText, Content, CardContainer } from "../styles/Main.styled";
import Card from "../card/Card";
import banner from "../../public/images/banner.svg"

const Main = () => {
    return (
        <StyledMain>
            <Banner src={banner} alt='Banner' />
            <Content>
                <MainText>
                    Welcome Back!
                </MainText>
                <CardContainer>
                    <Card />
                </CardContainer>
                <MainText>
                    Cheers to the Weekend 
                </MainText>
                <CardContainer>
                    <Card />
                </CardContainer>
            </Content>
        </StyledMain>
    );
}
 
export default Main;