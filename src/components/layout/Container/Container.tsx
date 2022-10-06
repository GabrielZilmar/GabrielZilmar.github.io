import { PropsWithChildren } from "react";
import { StyledContainer } from "~/components/layout/Container/styles";

interface ContainerLayoutProps extends PropsWithChildren {
  id: string;
}

const ContainerLayout: React.FC<ContainerLayoutProps> = ({ id, children }) => (
  <StyledContainer id={id}>{children}</StyledContainer>
);

export default ContainerLayout;
