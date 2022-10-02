import {
  AboutMeText,
  AboutMeTitle,
  AboutMeWrapper,
} from "~/components/about-me/styles";
import ContainerLayout from "~/components/layout/Container/Container";

const AboutMe: React.FC = () => {
  return (
    <ContainerLayout id="about-me">
      <AboutMeWrapper>
        <AboutMeTitle variant="h5">About Me</AboutMeTitle>
        <AboutMeText>
          Sed vitae metus ipsum. Nulla gravida, turpis quis iaculis molestie,
          nunc orci finibus ante, et fringilla libero tellus sed est. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit.
        </AboutMeText>
      </AboutMeWrapper>
    </ContainerLayout>
  );
};

export default AboutMe;
