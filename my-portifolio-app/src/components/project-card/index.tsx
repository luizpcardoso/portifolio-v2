import { Container } from "./style";

import { BiLinkExternal } from "react-icons/bi";

import { RiGitRepositoryFill, RiMovieFill, RiPagesLine } from "react-icons/ri";

interface IProject {
  project: {
    title: string;
    description: string;
    link: string;
    tecnologies: string;
    video: string;
    deploy: string;
  };
}

export default function ProjectCard({ project }: IProject) {
  return (
    <Container>
      <div className="details__section">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <p>
          <span className="deails__tecnologies">{project.tecnologies}</span>
        </p>
      </div>
      <div className="links__section">
        {project.link ? (
          <a href={project.link} target="_blank" rel="noreferrer">
            <RiGitRepositoryFill className="icon" />
          </a>
        ) : null}
        {project.video ? (
          <a href={project.video} target="_blank" rel="noreferrer">
            <RiMovieFill className="icon" />
          </a>
        ) : null}
        {project.deploy ? (
          <a href={project.deploy} target="_blank" rel="noreferrer">
            <RiPagesLine className="icon" />
          </a>
        ) : null}
      </div>
    </Container>
  );
}
