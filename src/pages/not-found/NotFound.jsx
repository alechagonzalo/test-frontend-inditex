import { Typography } from "@/components/Typography";
import useMediaQuery from "@/hooks/media-query/useMediaQuery";
import { useTranslations } from "@/i18n/translations.hook";
import { device } from "@/styles/device";
import styled from "styled-components";

const ErrorPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing(5)};
  flex-direction: column-reverse;
  @media ${device.laptop} {
    flex-direction: initial;
  }
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing(5)};
  flex-direction: column;
`;

export const NotFound = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const { language } = useTranslations();

  return (
    <ErrorPageContainer>
      <TextContainer>
        <Typography fontSize={isMobile ? "h3" : "h1"}>
          {language.notFound.title}
        </Typography>
        <Typography fontSize={isMobile ? "h5" : "h3"}>
          {language.notFound.message}
        </Typography>
      </TextContainer>
    </ErrorPageContainer>
  );
};
