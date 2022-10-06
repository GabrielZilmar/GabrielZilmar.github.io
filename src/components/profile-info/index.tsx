import { Typography, Chip } from "@mui/material";
import { useEffect, useState } from "react";
import ContainerLayout from "~/components/layout/Container/Container";
import {
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
const SMALL_IMAGE_SIZE = "130";
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
    <ContainerLayout id="#">
      <InfoWrapper>
        <InfoTitle variant="h4">Gabriel Zilmar</InfoTitle>
        <InfoTitle variant="h5">Software Engineer</InfoTitle>
        <InfoDescriptionWrapper>
          <Typography>Computer Science Graduate from PUC Minas.</Typography>
          <Typography>
            Working with variate technologies, focus in <b>Typescript</b> and
            most modern stacks, and always looking for a <b>clean code</b> and a{" "}
            <b>clean architecture</b>.
          </Typography>
          <Typography>
            I have experience with new projects, talking with clients, and
            MicroServices.
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
    </ContainerLayout>
  );
};

export default ProfileInfo;
