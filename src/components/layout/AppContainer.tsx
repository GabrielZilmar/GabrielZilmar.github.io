import { Container, styled } from "@mui/material";
import { FunctionComponent, PropsWithChildren } from "react";

const StyledContainer = styled(Container)({
  height: "100vh",
  width: "100vw",
});

export const AppContainer: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return <StyledContainer>{children}</StyledContainer>;
};
