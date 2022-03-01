import { device } from "@/styles/device";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing(2)};
  @media ${device.laptop} {
    margin: ${({ theme }) => theme.spacing(0, 3, 0, 3)};
  }

  @media ${device.tablet} {
    margin: ${({ theme }) => theme.spacing(2.5, 2, 0, 2)};
  }
`;
