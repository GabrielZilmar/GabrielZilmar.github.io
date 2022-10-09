import AboutMe from "~/components/about-me";
import Contact from "~/components/contact";
import ProfileInfo from "~/components/profile-info";

const HomePage = () => {
  return (
    <>
      <ProfileInfo />
      <AboutMe />
      <Contact />
    </>
  );
};

export default HomePage;
