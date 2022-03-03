import error404 from "@/assets/404.png";
import { Typography } from "@/components/Typography";
import useMediaQuery from "@/hooks/useMediaQuery";
import { device } from "@/styles/device";
import styled from "styled-components";

const IMAGE_WIDTH = 160;
const IMAGE_HEIGHT = 212;

const ImageError = styled.img`
  width: 50vw;
  @media ${device.laptop} {
    width: 25vw;
  }
`;

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

  return (
    <ErrorPageContainer>
      <TextContainer>
        <Typography fontSize={isMobile ? "h3" : "h1"}> 404 </Typography>
        <Typography fontSize={isMobile ? "h5" : "h3"}>
          {" "}
          Ups... Page not found!{" "}
        </Typography>
      </TextContainer>
      <ImageError src={error404} />
    </ErrorPageContainer>
  );
};
