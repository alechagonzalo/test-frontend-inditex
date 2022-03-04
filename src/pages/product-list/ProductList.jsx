import { ProductItem } from "@/components/ProductItem";
import { Search } from "@/components/Search";
import { Select } from "@/components/Select";
import Skeleton from "@/components/Skeleton";
import { GoTop } from "@/components/GoTop";
import { device } from "@/styles/device";
import { client } from "@/utils/api-client";
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
  const [brands, setBrands] = useState([]);

  const loadData = async () => {
    const data = await client("api/product");
    setProducts(data);

    let brands = [];
    let minPrice = data[0].price;
    let maxPrice = 0;
    data.forEach((p) => {
      const price = Number(p.price);
      brands.includes(p.brand.toUpperCase())
        ? null
        : brands.push(p.brand.toUpperCase());
      minPrice = !!price && price < minPrice ? price : minPrice;
      maxPrice = !!price && price > maxPrice ? price : maxPrice;
    });
    setBrands(brands);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <ListContainer>
      <NavBar>
        <Select options={brands} />
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
      <GoTop />
    </ListContainer>
  );
};
