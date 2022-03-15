import { getProducts } from "@/hooks/api/useApi.hook";
import { mapProductsAMtoProductsVM } from "@/utils/mapper";
import { useEffect, useState } from "react";

let debounceTimer;

const debounce = (callback, time) => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(callback, time);
};

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

export const useProductList = () => {
  const [products, setProducts] = useState(null);
  const [filter, setFilter] = useState("");

  const { isLoading, data } = getProducts();

  useEffect(() => {
    !isLoading && !!data && setProducts(mapProductsAMtoProductsVM(data));
  }, [data, isLoading]);

  function handleFilter(e) {
    debounce(() => {
      setFilter(e.target.value);
    }, 500);
  }

  const filteredProducts = filterProducts(products, filter);

  return {
    filteredProducts,
    filter,
    handleFilter,
    isLoading,
  };
};
