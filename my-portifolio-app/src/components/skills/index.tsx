import { Container } from "./style";
import SkillsCard from "../skill-card";
import { skills } from "@/assets/database/skills";

export default function Skills() {
  return (
    <Container id="skills">
      <section>
        <h2>Skill-Set</h2>
        <div className="skills-container">
          {skills.map((skill) => {
            return <SkillsCard skill={skill} key={skill.title}></SkillsCard>;
          })}
        </div>
      </section>
    </Container>
  );
}
