import type { NextPage } from "next";
import AboutMe from "~/components/about-me";
import Contact from "~/components/contact";
import ProfileInfo from "~/components/profile-info";

const Home: NextPage = () => {
  return (
    <>
      <ProfileInfo />
      <AboutMe />
      <Contact />
    </>
  );
};

export default Home;
