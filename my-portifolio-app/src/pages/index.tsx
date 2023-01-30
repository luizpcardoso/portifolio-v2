import { Inter } from "@next/font/google";
import Skills from "@/components/skills";
import Projects from "@/components/projects";

import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header></Header>
      <Skills></Skills>
      <Projects></Projects>
    </>
  );
}
