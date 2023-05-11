import { Container } from "./style";
import Navbar from "../navbar";
import { BsLinkedin } from "react-icons/bs";
import { ImGithub } from "react-icons/im";

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
          <div>
            <a
              href="https://www.linkedin.com/in/luiz-paulo-reis-cardoso/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin className="icon" />
            </a>
            <a
              href="https://github.com/luizpcardoso"
              target="_blank"
              rel="noreferrer"
            >
              <ImGithub className="icon" />
            </a>
          </div>
        </div>
        <div className="header__image">
          <img src={fotografia} alt="Minha Imagem" />
        </div>
      </section>
    </Container>
  );
}
