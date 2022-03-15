import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "react-query";
import styled from "styled-components";

import { BreadcrumbsComponent } from "./Breadcrumbs";
import { Cart } from "./Cart";
import { device } from "@/styles/device";
import logo from "@/assets/logo.png";
import { Typography } from "./Typography";
import { Container } from "./Container";
import { notification } from "./notification";
import { useTranslations } from "@/i18n/translations.hook";

const HeaderBackground = styled.div`
  width: 100%;
  background-color: ${(p) => p.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing(6)};
  border-radius: 8px;

  height: 140px;
`;

const HeaderContainer = styled.header`
  width: 80%;
  position: absolute;

  height: auto;
  top: calc(140px - 10px);
  background-color: ${(p) => p.theme.colors.lightSecondary};
  border-radius: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => theme.spacing(1.25, 2, 1.25, 2)};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 2;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  @media ${device.mobileM} {
    height: 36px;
  }

  @media ${device.tablet} {
    height: 50px;
    top: calc(140px - 10px);
  }
`;

const ContainerTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0;
  @media ${device.tablet} {
    padding: ${({ theme }) => theme.spacing(0, 2, 0, 1)};
  }
`;

const Logo = styled.img`
  cursor: pointer;
  width: 200px;
  @media ${device.laptop} {
    width: 240px;
  }
  @media ${device.desktop} {
    width: 360px;
  }
`;

const TranslationsContainer = styled(Container)`
  position: absolute;
  top: 15px;
  right: 25px;
  gap: ${({ theme }) => theme.spacing(0.5)};
  flex-direction: row;
  @media ${device.laptop} {
    top: 20px;
    right: 30px;
  }
`;

const TranslationsItem = styled(Typography)`
  font-size: ${({ theme }) => theme.fontSizes.subtitle3};
  color: ${({ theme }) => theme.colors.lightGray};
  font-weight: bold;
  cursor: ${({ onClick }) => (onClick ? "pointer" : "default")};
  text-transform: uppercase;
  text-decoration: ${({ theme, selected }) =>
    selected ? "underline" : "none"};
  &:hover {
    color: ${({ onClick, theme }) =>
      onClick ? theme.colors.lightSecondary : theme.colors.lightGray};
  }
  @media ${device.laptop} {
    font-size: ${({ theme }) => theme.fontSizes.subtitle2};
  }
`;

const TitleSection = () => {
  const queryClient = useQueryClient();
  const [cartCount, setCartCount] = useState(0);

  const { language } = useTranslations();
  const notifyMsg = language.productDetails.addedToCart;

  useEffect(() => {
    const unsubscribe = queryClient.getQueryCache().subscribe((mutation) => {
      const key = mutation?.query?.queryKey;
      const { action } = mutation;

      if (key === "cart" && action) {
        setCartCount(action.data);
        notification({
          text: notifyMsg,
        });
      }
    });

    return unsubscribe;
  }, [queryClient, language]);

  return (
    <ContainerTitle>
      <BreadcrumbsComponent />
      <Cart items={cartCount} />
    </ContainerTitle>
  );
};

export const Header = () => {
  const navigate = useNavigate();

  const { current, setTranslation } = useTranslations();

  return (
    <HeaderBackground>
      <TranslationsContainer>
        <TranslationsItem
          onClick={() => {
            setTranslation("es");
          }}
          selected={current === "es"}
        >
          es
        </TranslationsItem>
        <TranslationsItem>/</TranslationsItem>
        <TranslationsItem
          onClick={() => {
            setTranslation("en");
          }}
          selected={current === "en"}
        >
          en
        </TranslationsItem>
      </TranslationsContainer>

      <Logo
        src={logo}
        onClick={() => {
          navigate(`/products/`);
        }}
      />
      <HeaderContainer>
        <TitleSection />
      </HeaderContainer>
    </HeaderBackground>
  );
};
