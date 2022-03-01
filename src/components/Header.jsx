import styled from "styled-components";
import { BreadcrumbsComponent } from "./Breadcrumbs";

const HeaderContainer = styled.header`
  width: 90%;
  background-color: ${(p) => p.theme.colors.lightSecondary};
  border-radius: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => theme.spacing(1.25, 2, 1.25, 2)};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-shadow: 1;
  gap: 2;
`;

const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const TitleSection = () => {
  return (
    <ContainerTitle>
      <BreadcrumbsComponent />
    </ContainerTitle>
  );
};

export const Header = () => {
  return (
    <HeaderContainer>
      <TitleSection />
    </HeaderContainer>
  );
};
