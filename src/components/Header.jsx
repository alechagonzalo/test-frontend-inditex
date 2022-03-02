import { device } from "@/styles/device";
import styled from "styled-components";
import { BreadcrumbsComponent } from "./Breadcrumbs";
import { Cart } from "./Cart";

const HeaderBackground = styled.div`
  width: 100%;
  background-color: ${(p) => p.theme.colors.primary};
  height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing(6)};
  border-radius: 8px;
  @media ${device.tablet} {
    height: 25vh;
  }
`;

const HeaderContainer = styled.header`
  width: 80%;
  position: absolute;
  height: 36px;
  top: calc(20vh - 18px);
  background-color: ${(p) => p.theme.colors.lightSecondary};
  border-radius: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => theme.spacing(1.25, 2, 1.25, 2)};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-shadow: 1;
  gap: 2;
  box-shadow: 3px 2px 28px 5px rgb(156 156 156 / 35%);
  @media ${device.tablet} {
    height: 50px;
    top: calc(25vh - 25px);
  }
`;

const ContainerTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  @media ${device.tablet} {
    padding: ${({ theme }) => theme.spacing(0, 2, 0, 1)};
  }
`;

const TitleSection = () => {
  return (
    <ContainerTitle>
      <BreadcrumbsComponent />
      <Cart items={2} />
    </ContainerTitle>
  );
};

export const Header = () => {
  return (
    <HeaderBackground>
      <HeaderContainer>
        <TitleSection />
      </HeaderContainer>
    </HeaderBackground>
  );
};
