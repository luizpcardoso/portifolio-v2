import { Container } from "./style";
import Navbar from "../navbar";

import fotografia from "../../assets/images/fotografia.svg";

export default function Header() {
  return (
    <Container id="sobre">
      <Navbar></Navbar>
      <section>
        <div className="header__title">
          <p>Me chamo Luiz,</p>
          <p>sou desenvolvedor</p>

          <p>
            <span>Full-Stack</span>
          </p>
        </div>
        <div className="header__image">
          <img src={fotografia} alt="Minha Imagem" />
        </div>
      </section>
    </Container>
  );
}
