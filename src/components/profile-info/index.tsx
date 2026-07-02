import { Button, Chip, Stack, Typography } from "@mui/material";
import Image from "next/image";
import ContainerLayout from "~/components/layout/Container/Container";
import { useLanguage } from "~/i18n/language-context";
import {
  HeroActions,
  HeroEyebrow,
  HighlightCard,
  HighlightLabel,
  HighlightValue,
  InfoDescriptionWrapper,
  InfoTitle,
  InfoWrapper,
  PhotoWrapper,
  TechnologiesWrapper,
  TechnologiesContainer,
  ProfilePhotoCard,
  MetaPills,
} from "~/components/profile-info/styles";

const ProfileInfo: React.FC = () => {
  const { content } = useLanguage();

  return (
    <ContainerLayout id="#">
      <InfoWrapper>
        <HeroEyebrow variant="caption">{content.profile.eyebrow}</HeroEyebrow>
        <InfoTitle variant="h2">{content.profile.title}</InfoTitle>
        <InfoTitle variant="h5">{content.profile.subtitle}</InfoTitle>
        <InfoDescriptionWrapper>
          {content.profile.descriptions.map((description) => (
            <Typography key={description}>{description}</Typography>
          ))}
        </InfoDescriptionWrapper>
        <MetaPills direction="row">
          {content.profile.metaChips.map((chip) => (
            <Chip key={chip} label={chip} variant="outlined" />
          ))}
        </MetaPills>
        <TechnologiesContainer>
          <Typography variant="subtitle2" color="text.secondary">
            {content.profile.technologiesLabel}
          </Typography>
          <TechnologiesWrapper spacing={1} alignItems="center" direction="row">
            {content.profile.technologies.map((technology) => (
              <Chip key={technology} label={technology} color="secondary" />
            ))}
          </TechnologiesWrapper>
        </TechnologiesContainer>
        <Stack spacing={1.5}>
          {content.profile.highlights.map(({ label, value }) => (
            <HighlightCard key={label}>
              <HighlightLabel variant="caption">{label}</HighlightLabel>
              <HighlightValue variant="body2" sx={{ whiteSpace: "pre-line" }}>
                {value}
              </HighlightValue>
            </HighlightCard>
          ))}
        </Stack>
        <HeroActions direction={{ xs: "column", sm: "row" }}>
          <Button
            variant="contained"
            href={content.profile.ctas.primaryHref}
            target="_blank"
            rel="noreferrer"
          >
            {content.profile.ctas.primary}
          </Button>
          <Button
            variant="outlined"
            href={content.profile.ctas.secondaryHref}
            target="_blank"
            rel="noreferrer"
          >
            {content.profile.ctas.secondary}
          </Button>
          <Button variant="text" href="#contact">
            {content.profile.ctas.contact}
          </Button>
        </HeroActions>
      </InfoWrapper>
      <PhotoWrapper>
        <ProfilePhotoCard>
          <Image
            alt={content.profile.photoAlt}
            src="/assets/images/profile.jpeg"
            width={1024}
            height={1024}
            priority
            sizes="(max-width: 900px) 90vw, 27rem"
          />
        </ProfilePhotoCard>
      </PhotoWrapper>
    </ContainerLayout>
  );
};

export default ProfileInfo;
