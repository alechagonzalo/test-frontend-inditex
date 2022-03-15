import styled from "styled-components";
import PropTypes from "prop-types";
import { IoCart } from "react-icons/io5";

import { device } from "@/styles/device";

const Badge = styled.span`
  position: relative;
  cursor: default;
  text-align: center;
  font-size: 1.5rem;
  color: ${(p) => p.theme.colors.primary};
`;

const CartIcon = styled(IoCart)`
  font-size: ${(p) => p.fontSize ?? "1.3rem"};
  @media ${device.tablet} {
    font-size: ${(p) => p.fontSize ?? "1.6rem"};
  }
`;

const SpanItems = styled.span`
  @media ${device.tablet} {
    right: -2px;
    top: 14px;
    height: 20px;
    padding: 0 4px;
    font-size: 0.65rem;
  }

  right: -2px;
  top: 12px;
  border: 2px solid ${(p) => p.theme.colors.lightSecondary};
  padding: ${({ theme }) => theme.spacing(0.25, 0.5, 0.5, 0.5)};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  box-sizing: border-box;
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 0.6rem;
  min-width: 15px;
  height: 15px;
  border-radius: 10px;
  z-index: 1;
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transform: scale(1) translate(50%, -50%);
  transform-origin: 100% 0%;
  background-color: ${(p) => p.theme.colors.red};
  color: #fff;
`;

export const Cart = ({ items }) => {
  return (
    <Badge>
      <CartIcon />

      {items > 0 && <SpanItems>{items}</SpanItems>}
    </Badge>
  );
};

Cart.propTypes = {
  items: PropTypes.number.isRequired,
};
