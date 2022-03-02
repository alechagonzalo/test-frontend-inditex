import { device } from "@/styles/device";
import { IoCart } from "react-icons/io5";
import styled from "styled-components";

import PropTypes from "prop-types";

const IconButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  background-color: transparent;
  outline: 0;
  border: 0;
  margin: 0;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  flex: 0 0 auto;
  font-size: 1.5rem;
  padding: 8px;
  border-radius: 50%;
  overflow: visible;
  color: ${(p) => p.theme.colors.primary};
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

const Badge = styled.span`
  position: relative;
  display: inline-flex;
  vertical-align: middle;
  flex-shrink: 0;
  cursor: pointer;
  text-align: center;
  font-size: 1.5rem;
  color: ${(p) => p.theme.colors.primary};
  margin-top: ${({ theme }) => theme.spacing(0.25)};
  @media ${device.tablet} {
    margin-top: 0px;
  }
`;

const CartIcon = styled(IoCart)`
  user-select: none;
  width: 1em;
  height: 1em;
  display: inline-block;
  fill: currentColor;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
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
    min-width: 20px;
    padding: 0 4px;
    font-size: 0.65rem;
  }

  right: -2px;
  top: 12px;
  border: 2px solid ${(p) => p.theme.colors.lightSecondary};
  padding: ${({ theme }) => theme.spacing(0.25, 0.5, 0.5, 0.5)};
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  position: absolute;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 0.6rem;
  min-width: 15px;
  height: 15px;
  border-radius: 10px;
  z-index: 1;
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-color: ${(p) => p.theme.colors.red};
  color: #fff;
  transform: scale(1) translate(50%, -50%);
  transform-origin: 100% 0%;
`;

export const Cart = ({ items }) => {
  return (
    <IconButton>
      <Badge>
        <CartIcon />
        <SpanItems>{items}</SpanItems>
      </Badge>
    </IconButton>
  );
};

Cart.propTypes = {
  items: PropTypes.number.isRequired,
};
