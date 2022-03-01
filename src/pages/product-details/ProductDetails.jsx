import { useParams } from "react-router-dom";

export const ProductDetails = ({ item }) => {
  const { product_id } = useParams();

  return <>{product_id}</>;
};
