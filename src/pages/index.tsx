import type { NextPage } from "next";
import Head from "next/head";
import AboutMe from "~/components/about-me";
import Contact from "~/components/contact";
import ProfileInfo from "~/components/profile-info";
import { useLanguage } from "~/i18n/language-context";

const Home: NextPage = () => {
  const { content } = useLanguage();

  return (
    <>
      <Head>
        <title>{content.meta.title}</title>
        <meta
          name="description"
          content={content.meta.description}
        />
        <meta
          property="og:title"
          key="og:title"
          content={content.meta.title}
        />
        <meta
          property="og:description"
          content={content.meta.ogDescription}
        />
        <meta
          property="twitter:title"
          key="twitter:title"
          content={content.meta.title}
        />
        <meta
          property="twitter:description"
          content={content.meta.twitterDescription}
        />
      </Head>
      <ProfileInfo />
      <AboutMe />
      <Contact />
    </>
  );
};

export default Home;
