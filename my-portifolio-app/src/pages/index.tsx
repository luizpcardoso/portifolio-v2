import { Inter } from "@next/font/google";

import Head from "next/head";

import Header from "@/components/header";
import Skills from "@/components/skills";
import Projects from "@/components/projects";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Portifólio do Luiz</title>
      </Head>
      <Header></Header>
      <Skills></Skills>
      <Projects></Projects>
    </>
  );
}
