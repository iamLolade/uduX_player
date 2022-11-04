import { StyledCard, CardContent } from "../styles/Card.styled";
import { cardData } from "./cardData";

const Card = () => {
    return (
        <>
            {cardData?.map(({key, src, bg, label, text}) => (
                <StyledCard key={key}>
                    <CardContent bg={bg}>

                    </CardContent>
                </StyledCard>
            ))}
        </>
    );
}
 
export default Card;