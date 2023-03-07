import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavouriteProjects";
import LatestCode from "../components/LatestCode";
import Hero from "../components/Hero";
import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";
import AboutMe from "@components/AboutMe";
import Experience from "@components/Experience";
import Contact from "@components/Contact";

export default function Home({ repositories }) {
  return (
    <ContainerBlock
      title={userData.name}
      description={userData.description}
    >
      <Hero />
      <FavouriteProjects />
      <AboutMe/>
      <Experience showEducation={false}/>
      <LatestCode repositories={repositories} />
      <Contact/>
    </ContainerBlock>
  );
}

export const getServerSideProps = async () => {
  console.log(process.env.GITHUB_AUTH_TOKEN);
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);

  return {
    props: {
      repositories: repositories || null,
    },
  };
};
