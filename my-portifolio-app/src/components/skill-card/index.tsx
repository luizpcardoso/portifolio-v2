import { Container } from "./style";

import { FaBeer } from "react-icons/fa";
import { IconType } from "react-icons/lib";

interface ISkillCards {
  skill: {
    title: string;
    icon: any;
    description: string;
  };
}

export default function SkillsCard({ skill }: ISkillCards) {
  return (
    <Container>
      <skill.icon className="icon" />
      <h3>{skill.title}</h3>
      <p>{skill.description}</p>
    </Container>
  );
}
