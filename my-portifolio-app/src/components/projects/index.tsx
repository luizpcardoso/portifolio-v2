import { Container } from "./style";
import ProjectCard from "../project-card";

import { projects } from "@/assets/database/projects";

interface IProject {
  title: string;
  description: string;
  link: string;
  tecnologies: string;
  video: string;
  deploy: string;
}

export default function Projects() {
  return (
    <Container>
      <section>
        <h2>Projects</h2>
        <div className="skills-container" id="projects">
          {projects.map((project: IProject) => {
            return (
              <ProjectCard project={project} key={project.title}></ProjectCard>
            );
          })}
        </div>
      </section>
    </Container>
  );
}
