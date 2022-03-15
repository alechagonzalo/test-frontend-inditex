import { Typography } from "@/components/Typography";
import { device } from "@/styles/device";
import styled, { keyframes } from "styled-components";
import { Container as Centered } from "@/components/Container";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.spacing(1, 1, 1, 1)};
  margin-top: ${({ theme }) => theme.spacing(4)};
  width: ${({ width }) => width ?? "90%"};
  gap: ${({ theme }) => theme.spacing(3)};

  @media ${device.mobileL} {
    width: 90%;
  }

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

export const RightSideContainer = styled(Centered)`
  @media ${device.laptop} {
    align-items: start;
  }
`;

const fadeKeyframes = keyframes`
  0% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

export const DetailsContainer = styled.div`
  display: grid;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing(2, 2, 2, 2)};
  width: auto;
  border-radius: ${({ theme }) => theme.spacing(1, 1, 1, 1)};
  justify-items: left;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: ${({ theme }) => theme.spacing(4)};
  grid-column-gap: ${({ theme }) => theme.spacing(4)};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  animation: ${fadeKeyframes} 300ms ease-in;
  margin: ${({ theme }) => theme.spacing(2, 0, 2, 0.5)};
  @media ${device.mobileL} {
    grid-template-columns: repeat(2, 1fr);
    padding: ${({ theme }) => theme.spacing(4, 4, 4, 4)};
  }
  @media ${device.tablet} {
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: ${({ theme }) => theme.spacing(8)};
    width: 50vw;
  }
  @media ${device.laptop} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(2)};
`;

export const DetailItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${device.tablet} {
    flex-direction: row;
    justify-content: start;
  }
`;

export const Label = styled(Typography)`
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: ${({ theme }) => theme.spacing(0.5)};
`;

export const LoaderCointainer = styled(Centered)`
  height: 50vh;
`;
