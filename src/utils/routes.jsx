import { ProductDetails } from "@/pages/product-details/ProductDetails";
import { ProductList } from "@/pages/product-list/ProductList";
import { Navigate } from "react-router-dom";
import { IoHomeSharp } from "react-icons/io5";
import styled from "styled-components";
import { NotFound } from "@/pages/not-found/NotFound";

const Home = styled(IoHomeSharp)`
  position: relative;
  top: 1px;
`;

export default [
  {
    id: "home",
    path: "/",
    breadcrumb: "Home",
    props: { icon: <Home /> },
    Component: () => <Navigate to="/products" />,
  },
  {
    id: "product",
    path: "/products",
    breadcrumb: "Products",
    Component: ProductList,
  },
  {
    id: "product_item",
    path: "/products/:product_id",
    Component: ProductDetails,
  },
  {
    id: "not_found",
    path: "*",
    Component: NotFound,
  },
];
