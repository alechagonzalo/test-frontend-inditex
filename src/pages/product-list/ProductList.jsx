import { useCallback, useEffect, useState } from "react";
import { client } from "@/utils/api-client";

import { ProductItem } from "@/components/ProductItem";
import { Search } from "@/components/Search";
import { Select } from "@/components/Select";
import Skeleton from "@/components/Skeleton";
import { GoTop } from "@/components/GoTop";
import { ListContainer, NavBar, ProductsContainer } from "./styles";
import { mapProductsAMtoProductsVM } from "@/utils/mapper";

function filterProducts(products, filter) {
  if (!products) return [];

  const pattern = filter
    .split("")
    .map((x) => {
      return `(?=.*${x})`;
    })
    .join("");
  const regex = new RegExp(`${pattern}`, "g");
  return products.filter((prod) => {
    return (
      prod.brand.toLowerCase().match(regex) ||
      prod.model.toLowerCase().match(regex)
    );
  });
}

let debounceTimer;

const debounce = (callback, time) => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(callback, time);
};

export const ProductList = () => {
  const [products, setProducts] = useState(null);
  const [filter, setFilter] = useState("");

  const loadData = async () => {
    const data = await client("api/product");
    setProducts(mapProductsAMtoProductsVM(data));
  };

  useEffect(() => {
    loadData();
  }, []);

  function handleFilter(e) {
    debounce(() => {
      setFilter(e.target.value);
    }, 500);
  }

  const filteredProducts = filterProducts(products, filter);

  return (
    <ListContainer>
      <NavBar>
        <Search onChange={handleFilter} />
      </NavBar>
      <ProductsContainer>
        {filteredProducts ? (
          <>
            {filteredProducts.map((item) => {
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
