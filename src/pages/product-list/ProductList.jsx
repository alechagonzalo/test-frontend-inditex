import { Search } from "@/components/Search";
import Skeleton from "@/components/Skeleton";
import { device } from "@/styles/device";
import styled from "styled-components";
const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(2)};
  width: auto;
  @media ${device.tablet} {
    width: 90%;
  }
`;

const NavBar = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.spacing(1)};
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  @media ${device.mobileL} {
    justify-content: flex-end;
    width: auto;
  }
`;

const ProductsContainer = styled.div`
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

export const ProductList = () => {
  return (
    <ListContainer>
      <NavBar>
        <Search />
      </NavBar>
      <ProductsContainer>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </ProductsContainer>
    </ListContainer>
  );
};
