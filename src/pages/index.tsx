import type { GetServerSideProps, NextPage } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/home",
      permanent: false,
    },
  };
};

const Home: NextPage = () => {
  return <></>;
};

export default Home;
