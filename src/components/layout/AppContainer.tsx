import { Container } from "@mui/material";
import { FunctionComponent, PropsWithChildren } from "react";

export const AppContainer: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        position: "relative",
        zIndex: 1,
        py: { xs: 0, md: 2 },
      }}
    >
      {children}
    </Container>
  );
};
