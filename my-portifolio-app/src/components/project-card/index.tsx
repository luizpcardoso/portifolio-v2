import { Container } from "./style";

import { BiLinkExternal } from "react-icons/bi";

import { RiGitRepositoryFill } from "react-icons/ri";

interface IProject {
  project: {
    title: string;
    description: string;
    link: string;
    tecnologies: string;
  };
}

export default function ProjectCard({ project }: IProject) {
  return (
    <Container>
      <RiGitRepositoryFill className="icon" />
      <h3>
        <a href={project.link} target="_blank">
          {project.title} <BiLinkExternal />
        </a>
      </h3>
      <p>{project.description}</p>
      <p>
        <span>{project.tecnologies}</span>
      </p>
    </Container>
  );
}
