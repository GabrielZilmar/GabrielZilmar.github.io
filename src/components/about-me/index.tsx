import { Link, Stack, Typography } from "@mui/material";
import {
  AboutMeText,
  AboutMeTitle,
  AboutMeWrapper,
  AboutRow,
  AboutSection,
  ExperienceBullets,
  ExperienceCard,
  ExperienceGrid,
  ExperienceHeader,
  ExperienceMeta,
  AboutPanel,
  StacksContainer,
  StacksWrapper,
  SectionLabel,
  WhatIWorkWithContainer,
  WhatIWorkWithWrapper,
} from "~/components/about-me/styles";
import ContainerLayout from "~/components/layout/Container/Container";
import TripOriginIcon from "@mui/icons-material/TripOrigin";
import { useLanguage } from "~/i18n/language-context";

const AboutMe: React.FC = () => {
  const { content } = useLanguage();

  return (
    <ContainerLayout id="about-me">
      <AboutSection>
        <AboutRow>
          <AboutMeWrapper>
            <SectionLabel variant="caption">{content.about.label}</SectionLabel>
            <AboutMeTitle variant="h4">{content.about.title}</AboutMeTitle>
            {content.about.intro.map((paragraph, index) => (
              <AboutMeText key={paragraph}>
                {index === 1 ? (
                  <>
                    {paragraph.split("PUC Minas")[0]}
                    <Link href="https://www.pucminas.br/destaques/Paginas/default.aspx">
                      PUC Minas
                    </Link>
                    {paragraph.split("PUC Minas")[1]}
                  </>
                ) : (
                  paragraph
                )}
              </AboutMeText>
            ))}
            <AboutPanel>
              <Typography variant="subtitle1" fontWeight={700}>
                {content.about.workTitle}
              </Typography>
              <Stack spacing={1.25}>
                {content.about.workIntro.map((paragraph) => (
                  <AboutMeText key={paragraph}>{paragraph}</AboutMeText>
                ))}
              </Stack>
            </AboutPanel>
          </AboutMeWrapper>
        </AboutRow>
        <AboutRow>
          <WhatIWorkWithContainer>
            <WhatIWorkWithWrapper>
              <SectionLabel variant="caption">
                {content.about.experiencesLabel}
              </SectionLabel>
              <ExperienceGrid>
                {content.about.experiences.map(
                  ({ company, role, period, location, bullets }) => (
                    <ExperienceCard key={company}>
                      <ExperienceHeader>
                        <AboutMeTitle variant="h6">{role}</AboutMeTitle>
                        <Typography fontWeight={700}>{company}</Typography>
                        <ExperienceMeta>
                          <span>{location}</span>
                          <span>{period}</span>
                        </ExperienceMeta>
                      </ExperienceHeader>
                      <ExperienceBullets>
                        {bullets.map((bullet) => (
                          <Typography key={bullet}>
                            <TripOriginIcon />
                            {bullet}
                          </Typography>
                        ))}
                      </ExperienceBullets>
                    </ExperienceCard>
                  ),
                )}
              </ExperienceGrid>
            </WhatIWorkWithWrapper>
          </WhatIWorkWithContainer>
        </AboutRow>
        <AboutRow>
          <WhatIWorkWithContainer>
            <WhatIWorkWithWrapper>
              <SectionLabel variant="caption">{content.about.stackLabel}</SectionLabel>
              <Typography variant="h6" fontWeight={700}>
                {content.about.stackTitle}
              </Typography>
              <StacksContainer>
                {content.about.stacks.map(({ stackName, stacks }) => (
                  <StacksWrapper key={stackName}>
                    <AboutMeTitle>{stackName}</AboutMeTitle>
                    {stacks.map((stack) => (
                      <Typography key={stack}>
                        <TripOriginIcon /> {stack}
                      </Typography>
                    ))}
                  </StacksWrapper>
                ))}
              </StacksContainer>
            </WhatIWorkWithWrapper>
          </WhatIWorkWithContainer>
        </AboutRow>
      </AboutSection>
    </ContainerLayout>
  );
};

export default AboutMe;
