import type { NextPage } from "next";
import Head from "next/head";
import AboutMe from "~/components/about-me";
import Contact from "~/components/contact";
import ProfileInfo from "~/components/profile-info";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{"Gabriel Zilmar"}</title>
        <meta property="og:title" key="og:title" content={"Gabriel Zilmar"} />
        <meta
          property="twitter:title"
          key="twitter:title"
          content={"Gabriel Zilmar"}
        />
      </Head>
      <ProfileInfo />
      <AboutMe />
      <Contact />
    </>
  );
};

export default Home;
