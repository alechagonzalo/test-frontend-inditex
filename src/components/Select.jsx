import { device } from "@/styles/device";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";
import { Typography } from "./Typography";
import { IoCaretDown, IoCaretUp } from "react-icons/io5";
import { useState } from "react";

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
  box-shadow: -1px 45px 78px -20px rgba(0, 0, 0, 0.58);
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
  width: 20ch;
  padding: 10px;
  box-shadow: 10px 10px 24px 1px rgba(194, 194, 194, 0.47);

  z-index: 2;
`;

const MenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
  max-height: calc(100% - 32px);
  transition: max-height 0.25s ease-in; /* 
  
  padding-top: ${({ theme }) => theme.spacing(1)};
  padding-bottom: ${({ theme }) => theme.spacing(1)}; */
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
  }
`;

export const Select = ({ options, optionSelected }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <StyledButton
        onClick={() => {
          options && setIsOpen(!isOpen);
        }}
        onBlur={() => {
          setIsOpen(false);
        }}
      >
        <SearchIconWrapper>
          {isOpen ? <IoCaretUp /> : <IoCaretDown />}
        </SearchIconWrapper>
        <Label fontSize="subtitle3">{optionSelected ?? "Brand"}</Label>
      </StyledButton>
      {isOpen ? (
        <MenuContainer>
          <MenuList>
            {options.map((option) => (
              <MenuItem key={option}>
                <Label fontSize="subtitle3">{option}</Label>
              </MenuItem>
            ))}
          </MenuList>
        </MenuContainer>
      ) : null}
    </div>
  );
};
