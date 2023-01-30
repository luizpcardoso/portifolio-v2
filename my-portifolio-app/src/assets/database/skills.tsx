import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { FaDatabase } from "react-icons/fa";
import { DiGitCompare } from "react-icons/di";

export const skills = [
  {
    title: "Javascript",
    icon: IoLogoJavascript,
    description:
      "Desenvolvimento de web pages utilizando Javascript puro ou com alguma biblioteca/framework.",
  },
  {
    title: "TypeScript",
    icon: SiTypescript,
    description:
      "Páginas mais estáveis usando o TypeScript para desenvolvimento, uso geralmente integrado com React js e Next js.",
  },
  {
    title: "React Js",
    icon: FaReact,
    description:
      "Desenvolvimento de web pages SPA completas utilizando React como ferramenta e bibliotecas como styled-components, react-Icons, Material-Ui entre outras bibliotecas...",
  },
  {
    title: "Node Js",
    icon: IoLogoNodejs,
    description:
      "Desenvolvimentos de API's Rest completas, com usgo de express, type-ORM e um db relacional ou não.",
  },
  {
    title: "Database",
    icon: FaDatabase,
    description:
      "Utilização de bancos relacionais ou não relacionais para armazenamento de dados e integrados a API's.",
  },
  {
    title: "Git",
    icon: DiGitCompare,
    description:
      "Uso de git para versionamento de código, metodologias de git-flow para desenvolvimento em equipe.",
  },
];
