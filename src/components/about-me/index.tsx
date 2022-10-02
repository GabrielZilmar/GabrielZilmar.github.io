import { Typography } from "@mui/material";
import {
  AboutMeContainer,
  AboutMeText,
  AboutMeTitle,
  AboutMeWrapper,
} from "~/components/about-me/styles";

const AboutMe: React.FC = () => {
  return (
    <AboutMeContainer id="about-me">
      <AboutMeWrapper>
        <AboutMeTitle variant="h5">About Me</AboutMeTitle>
        <AboutMeText>
          Sed vitae metus ipsum. Nulla gravida, turpis quis iaculis molestie,
          nunc orci finibus ante, et fringilla libero tellus sed est. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit.
        </AboutMeText>
      </AboutMeWrapper>
    </AboutMeContainer>
  );
};

export default AboutMe;
