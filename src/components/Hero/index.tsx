import { Container } from "./styles";
import heroImage from "../../assets/images/heroRafael.jpg"

export function Hero() {
    return (
        <Container>
            <img src={heroImage} alt="Imagem de Hero" />
        </Container>
    );
}