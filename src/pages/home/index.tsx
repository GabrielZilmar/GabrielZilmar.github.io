import { Typography, Chip } from "@mui/material";
import {
  HomeContainer,
  InfoDescriptionWrapper,
  InfoTitle,
  InfoWrapper,
  PhotoWrapper,
  ProfilePhotoCard,
} from "~/pages/home/styles";

const HomePage = () => {
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
          <Chip label="Typescript" />
          <Chip label="NodeJS" />
          <Chip label="ReactJS" />
          <Chip label="NextJS" />
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

export default HomePage;
