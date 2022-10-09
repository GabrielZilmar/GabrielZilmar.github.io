import { PropsWithChildren } from "react";
import {
  StyledContainer,
  StyledContainerCenter,
} from "~/components/layout/Container/styles";

interface ContainerLayoutProps extends PropsWithChildren {
  id: string;
  center?: boolean;
}

const ContainerLayout: React.FC<ContainerLayoutProps> = ({
  id,
  center = true,
  children,
}) => {
  return (
    <>
      {center ? (
        <StyledContainerCenter id={id}>{children}</StyledContainerCenter>
      ) : (
        <StyledContainer id={id}>{children}</StyledContainer>
      )}
    </>
  );
};

export default ContainerLayout;
