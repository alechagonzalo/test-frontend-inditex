import { client } from "@/utils/api-client";
import { useQuery, useMutation, useQueryClient } from "react-query";

const urls = {
  getProducts: "/api/product",
  getProductItem: "/api/product/",
  addToCart: "/api/cart",
};

const getProductsConfig = () => ({
  queryKey: ["product"],
  queryFn: () => client(urls.getProducts).then((data) => data),
});

const getProductItemConfig = (productId) => ({
  queryKey: ["product_item", productId],
  queryFn: () =>
    client(`${urls.getProductItem}${productId}`).then((data) => data),
});

export const getProducts = () => {
  const result = useQuery(getProductsConfig());
  return { ...result };
};

export const getProductItem = (productId) => {
  const result = useQuery(getProductItemConfig(productId));
  return { ...result };
};

export const addToCart = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (item) =>
      client(urls.addToCart, {
        data: item,
      }),
    {
      onSuccess: (cart) => {
        queryClient.setQueryData("cart", cart.count);
      },
    }
  );
};
