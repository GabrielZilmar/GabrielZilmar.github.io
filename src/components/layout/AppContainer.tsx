import { Container } from "@mui/material";
import { FunctionComponent, PropsWithChildren } from "react";

export const AppContainer: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return <Container>{children}</Container>;
};
