import { StyledMain, Banner, MainText, Content, CardContainer } from "../styles/Main.styled";
import Card from "../card/Card";
import banner from "../../public/images/banner.svg"
import { Tween } from "react-gsap";

const Main = () => {

    return (
        <StyledMain>
            <Tween from={{ y: '-100' }} to={{ y: 0 }} duration={2.5}>
                <Banner src={banner} alt='Banner' />
            </Tween>
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