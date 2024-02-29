import { BsLinkedin } from "react-icons/bs";
import { Container } from "./style";

export default function Navbar() {
  return (
    <Container>
      <nav>
        <ul>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/luiz-paulo-reis-cardoso/"
              target="_blank"
              rel="noreferrer"
            >
              Meu Linked-in
            </a>
          </li>

          {/* <li>
            <a href="#projects">Projetos</a>
          </li> */}

          {/* <div>
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
        </div> */}
        </ul>
      </nav>
    </Container>
  );
}
