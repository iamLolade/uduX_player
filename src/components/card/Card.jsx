import { StyledCard, CardContent, CardImage, CardLabel, CardDescription, ImageContainer } from "../styles/Card.styled";
import { cardData } from "./cardData";

const Card = () => {
    return (
        <>
            {cardData?.map(({key, src, bg, label, description}) => (
                <StyledCard key={key}>
                    <CardContent bg={bg}>
                        <ImageContainer>
                            <CardImage src={src} />
                        </ImageContainer>
                        <CardLabel>{label}</CardLabel>
                        <CardDescription>{description}</CardDescription>
                    </CardContent>
                </StyledCard>
            ))}
        </>
    );
}
 
export default Card;