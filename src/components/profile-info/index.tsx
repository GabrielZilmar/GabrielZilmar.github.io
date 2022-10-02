import { Typography, Chip } from "@mui/material";
import { useEffect, useState } from "react";
import {
  ProfileInfoContainer,
  InfoDescriptionWrapper,
  InfoTitle,
  InfoWrapper,
  PhotoWrapper,
  ProfilePhotoCard,
  TechnologiesWrapper,
  TechnologiesContainer,
} from "~/components/profile-info/styles";
import { useViewport } from "~/hooks";
import { theme } from "~/styles/theme";

const DEFAULT_IMAGE_SIZE = "416";
const SMALL_IMAGE_SIZE = "216";
const MEDIUM_IMAGE_SIZE = "316";

const TECHNOLOGIES = [
  "Typescript",
  "NodeJS",
  "ReactJS",
  "NextJS",
  "PostgreSQL",
];

const ProfileInfo: React.FC = () => {
  const viewport = useViewport();
  const [imageSize, setImageSize] = useState<string>("476");

  useEffect(() => {
    const currentWidth = viewport.width;
    const smallBreakpoint = theme.breakpoints.values["sm"];
    const mediumBreakpoint = theme.breakpoints.values["md"];

    if (currentWidth <= smallBreakpoint) {
      setImageSize(SMALL_IMAGE_SIZE);
    } else if (currentWidth <= mediumBreakpoint) {
      setImageSize(MEDIUM_IMAGE_SIZE);
    } else {
      setImageSize(DEFAULT_IMAGE_SIZE);
    }
  }, [viewport]);

  return (
    <ProfileInfoContainer id="home">
      <InfoWrapper>
        <InfoTitle variant="h4">Gabriel Zilmar</InfoTitle>
        <InfoTitle variant="h5">Software Engineer</InfoTitle>
        <InfoDescriptionWrapper>
          <Typography>
            Lorem Ipsum has been the industry`s standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </Typography>
          <TechnologiesContainer>
            <TechnologiesWrapper
              spacing={1}
              alignItems="center"
              direction="row"
            >
              {TECHNOLOGIES.map((technology) => (
                <Chip key={technology} label={technology} color="secondary" />
              ))}
            </TechnologiesWrapper>
          </TechnologiesContainer>
        </InfoDescriptionWrapper>
      </InfoWrapper>
      <PhotoWrapper>
        <ProfilePhotoCard
          alt="Profile Photo"
          src="/assets/images/profile.webp"
          width={imageSize}
          height={imageSize}
        />
      </PhotoWrapper>
    </ProfileInfoContainer>
  );
};

export default ProfileInfo;
