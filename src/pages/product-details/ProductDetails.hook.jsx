import { getProductItem } from "@/hooks/api/useApi.hook";
import useMediaQuery from "@/hooks/media-query/useMediaQuery";
import { mapProductAMtoProductVM } from "@/utils/mapper";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";

export const useProductDetails = () => {
  const { product_id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedStorage, setSelectedStorage] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const isLaptop = useMediaQuery("(min-width: 1024px)");

  const { isLoading, data } = getProductItem(product_id);

  const loadData = async () => {
    if (isLoading) return;

    setProduct(data);

    if (data?.options?.colors?.length === 1)
      setSelectedColor({
        id: data.options.colors[0].code,
        name: data.options.colors[0].name,
      });

    if (data?.options?.storages?.length === 1)
      setSelectedStorage({
        id: data.options.storages[0].code,
        name: data.options.storages[0].name,
      });
  };

  useEffect(() => {
    loadData();
  }, [data]);

  const handleStorageChange = useCallback((option) => {
    setSelectedStorage(option);
  }, []);

  const handleColorChange = useCallback(
    (option) => setSelectedColor(option),
    []
  );

  const productItem = product ? mapProductAMtoProductVM(product) : null;

  return {
    productItem,
    selectedStorage,
    selectedColor,
    isLaptop,
    handleStorageChange,
    handleColorChange,
    isLoading,
  };
};
