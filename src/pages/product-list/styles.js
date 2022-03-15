import styled from "styled-components";
import { device } from "@/styles/device";

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(2)};
  width: auto;

  @media ${device.tablet} {
    width: 90%;
  }
`;

export const NavBar = styled.div`
  margin-top: ${({ theme }) => theme.spacing(1)};
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  flex-direction: column-reverse;
  gap: ${({ theme }) => theme.spacing(1)};
  @media ${device.mobileL} {
    flex-direction: row;
  }

  @media ${device.laptop} {
    width: 90%;
    justify-content: start;
    margin-left: ${({ theme }) => theme.spacing(10)};
    gap: ${({ theme }) => theme.spacing(4)};
  }
`;

export const ProductsContainer = styled.div`
  display: grid;
  margin-top: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  justify-items: center;
  grid-template-columns: repeat(1, 1fr);

  @media ${device.mobileL} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${device.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${device.laptop} {
    grid-template-columns: repeat(4, 1fr);
  }
`;
