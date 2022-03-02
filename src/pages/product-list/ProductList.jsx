import { ProductItem } from "@/components/ProductItem";
import { Search } from "@/components/Search";
import Skeleton from "@/components/Skeleton";
import { device } from "@/styles/device";
import { client } from "@/utils/client";
import { useEffect, useState } from "react";
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
  margin-top: ${({ theme }) => theme.spacing(1)};
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;

  @media ${device.laptop} {
    width: 90%;
    justify-content: flex-end;
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
  const [products, setProducts] = useState(null);

  const loadData = async () => {
    const products = await client("api/product");
    setProducts(products);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <ListContainer>
      <NavBar>
        <Search />
      </NavBar>
      <ProductsContainer>
        {products ? (
          <>
            {products.map((item) => {
              return <ProductItem item={item} key={item.id} />;
            })}
          </>
        ) : (
          <>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </>
        )}
      </ProductsContainer>
    </ListContainer>
  );
};
