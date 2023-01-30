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
            <a href="#projects">Projetos</a>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
