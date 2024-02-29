import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { FaDatabase } from "react-icons/fa";
import { DiGitCompare } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { SiNestjs } from "react-icons/si";

export const skills = [
  {
    title: "Next Js",
    icon: TbBrandNextjs,
    description: "Desenvolvimento de aplicações WEB utilizando Next.js",
  },
  {
    title: "Nest js",
    icon: SiNestjs,
    description:
      "Criação e manutenção de API's utilizando a biblioteca do node Nest Js.",
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
];
