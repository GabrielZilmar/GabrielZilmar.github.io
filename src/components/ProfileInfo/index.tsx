import { Typography, Chip, Stack } from "@mui/material";
import {
  HomeContainer,
  InfoDescriptionWrapper,
  InfoTitle,
  InfoWrapper,
  PhotoWrapper,
  ProfilePhotoCard,
  TechnologiesWrapper,
} from "~/components/ProfileInfo/styles";

const TECHNOLOGIES = [
  "Typescript",
  "NodeJS",
  "ReactJS",
  "NextJS",
  "PostgreSQL",
];

const ProfileInfo = () => {
  return (
    <HomeContainer>
      <InfoWrapper>
        <InfoTitle variant="h4">Gabriel Zilmar</InfoTitle>
        <InfoTitle variant="h5">Software Engineer</InfoTitle>
        <InfoDescriptionWrapper>
          <Typography>
            Lorem Ipsum has been the industry`s standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </Typography>
          <TechnologiesWrapper>
            <Stack spacing={1} alignItems="center" direction="row">
              {TECHNOLOGIES.map((technology) => (
                <Chip key={technology} label={technology} color="secondary" />
              ))}
            </Stack>
          </TechnologiesWrapper>
        </InfoDescriptionWrapper>
      </InfoWrapper>
      <PhotoWrapper>
        <ProfilePhotoCard
          alt="Profile Photo"
          src="/assets/images/profile.webp"
          width={476}
          height={476}
        />
      </PhotoWrapper>
    </HomeContainer>
  );
};

export default ProfileInfo;
