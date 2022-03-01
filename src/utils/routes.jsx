import { ProductDetails } from "@/pages/product-details/ProductDetails";
import { ProductList } from "@/pages/product-list/ProductList";
import { Navigate } from "react-router-dom";

export default [
  { path: "/products", name: "Product List", Component: ProductList },
  {
    path: "/products/:product_id",
    name: "Product List",
    Component: ProductDetails,
  },
  {
    path: "/",
    name: "Home",
    Component: () => <Navigate to="/products" />,
  },
];
