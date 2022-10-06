import { Link, Typography } from "@mui/material";
import {
  AboutMeText,
  AboutMeTitle,
  AboutMeWrapper,
  StacksContainer,
  StacksWrapper,
  WhatIWorkWithContainer,
  WhatIWorkWithWrapper,
} from "~/components/about-me/styles";
import ContainerLayout from "~/components/layout/Container/Container";
import TripOriginIcon from "@mui/icons-material/TripOrigin";
import { StacksType } from "~/components/about-me/types";

const STACKS: StacksType[] = [
  {
    stackName: "backend",
    stacks: [
      "NodeJS",
      "Express",
      "Koa",
      "Firebase Functions",
      "Hapi",
      "AWS Lambda",
      "Prisma",
      "TypeORM",
    ],
  },
  {
    stackName: "frontend",
    stacks: ["React", "NextJS", "Redux", "Styled Components"],
  },
];

const AboutMe: React.FC = () => {
  return (
    <ContainerLayout id="about-me">
      <AboutMeWrapper>
        <AboutMeTitle variant="h5">About Me</AboutMeTitle>
        <AboutMeText>{"Hi! I'm Gabriel Zilmar."}</AboutMeText>
        <AboutMeText>
          {"I graduated in computer science at "}
          <Link href="https://www.pucminas.br/destaques/Paginas/default.aspx">
            Puc Minas
          </Link>
          {"."}
        </AboutMeText>
        <AboutMeText>
          {
            "I work with full stack development for 3 years, always looking to improve code quality with good practices and learn new technologies."
          }
        </AboutMeText>
      </AboutMeWrapper>
      <WhatIWorkWithContainer>
        <hr />
        <WhatIWorkWithWrapper>
          <Typography>Some stacks that I work with:</Typography>
          <StacksContainer>
            {STACKS.map(({ stackName, stacks }) => (
              <StacksWrapper key={stackName}>
                <AboutMeTitle>Backend</AboutMeTitle>
                {stacks.map((stack) => (
                  <Typography key={stack}>
                    <TripOriginIcon /> {stack}
                  </Typography>
                ))}
              </StacksWrapper>
            ))}
          </StacksContainer>
        </WhatIWorkWithWrapper>
        <hr />
      </WhatIWorkWithContainer>
    </ContainerLayout>
  );
};

export default AboutMe;
