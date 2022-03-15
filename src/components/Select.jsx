import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { IoCaretDown, IoCaretUp } from "react-icons/io5";

import { Typography } from "./Typography";
import { device } from "@/styles/device";

const SearchIconWrapper = styled("div")(({ theme }) => ({
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  top: 0,
  right: theme.spacing(1),
}));

const StyledButton = styled.button`
  box-sizing: border-box;
  min-height: ${({ theme }) => theme.spacing(3)};
  width: 20ch;
  background: ${({ theme }) => theme.colors.lightGray};
  border: none;
  outline: none;
  border-radius: ${({ theme }) => theme.spacing(1, 1, 1, 1)};
  margin: ${({ theme }) => theme.spacing(0.5, 1, 0.5, 1)};
  padding: 8px;
  text-align: left;
  transition: width;
  transition-duration: 300ms;
  height: ${({ theme }) => theme.spacing(5)};
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  &:hover {
    background: ${({ theme }) => theme.colors.hoverGray};
  }
  @media ${device.tablet} {
    width: 20ch;
    &:focus {
      width: 25ch;
      border: none;
      background: ${({ theme }) => theme.colors.hoverGray};
    }
  }
`;

const Label = styled(Typography)`
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: ${({ theme }) => theme.spacing(2)};
`;

const MenuContainer = styled.div`
  background-color: #fff;
  color: rgba(0, 0, 0, 0.87);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: ${({ theme }) => theme.spacing(1, 1, 1, 1)};
  max-width: 25ch;
  margin: ${({ theme }) => theme.spacing(0, 1, 1, 1)};
  padding: 10px;
  background: ${({ theme }) => theme.colors.lightGray};
  position: absolute;
  overflow-y: auto;
  overflow-x: hidden;
  outline: 0;
  width: 15ch;

  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

  z-index: 2;
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  @media ${device.tablet} {
    width: 20ch;
  }
`;

const MenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
  max-height: calc(100% - 32px);
  transition: max-height 0.25s ease-in;
`;

const MenuItem = styled.li`
  min-height: 1.7rem;
  background-color: transparent;
  outline: 0;
  border: 0;
  margin: 0;
  border-radius: 0;
  padding: ${({ theme }) => theme.spacing(0.5, 1, 0.5, 1)};
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  color: inherit;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: 0.00938em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  &:hover {
    text-decoration: none;
    background-color: ${({ theme }) => theme.colors.hoverGray};
  }
`;

export const Select = ({ options, optionSelected, title, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <StyledButton
        onClick={() => {
          options.length > 0 && setIsOpen(!isOpen);
        }}
        onBlur={(e) => {
          setIsOpen(false);
        }}
      >
        <SearchIconWrapper>
          {isOpen ? <IoCaretUp /> : <IoCaretDown />}
        </SearchIconWrapper>
        <Label fontSize="subtitle3">{optionSelected?.name ?? title}</Label>
      </StyledButton>

      <MenuContainer isOpen={isOpen}>
        <MenuList>
          {options.map((option) => (
            <MenuItem
              key={option.id}
              onMouseDown={(e) => {
                onChange(option);
                setIsOpen(false);
              }}
            >
              <Label fontSize="subtitle3">{option.name}</Label>
            </MenuItem>
          ))}
        </MenuList>
      </MenuContainer>
    </div>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  optionSelected: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
};
