import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

import { device } from "@/styles/device";

const SearchInner = styled("div")`
  position: relative;
  border-radius: ${({ theme }) => theme.spacing(0.5)};
  width: 100%;
  margin-left: 0;
  border: none;
  @media ${device.mobileL} {
    width: auto;
  }
`;

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled.input`
  color: inherit;
  padding: ${({ theme }) => theme.spacing(1, 1, 1, 0)};
  border-radius: ${({ theme }) => theme.spacing(1, 1, 1, 1)};
  padding-left: calc(1em + ${({ theme }) => theme.spacing(3)});
  transition: width;
  transition-duration: 300ms;
  width: auto;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  background: ${({ theme }) => theme.colors.lightGray};
  outline: none;
  height: ${({ theme }) => theme.spacing(3)};
  &:hover {
    background: ${({ theme }) => theme.colors.hoverGray};
  }
  @media ${device.tablet} {
    width: 25ch;
    &:focus {
      width: 30ch;
      border: none;
    }
  }
`;

export const Search = ({ onChange, title = "Search" }) => {
  return (
    <SearchInner>
      <SearchIconWrapper>
        <BsSearch />
      </SearchIconWrapper>
      <StyledInputBase placeholder={title} onChange={onChange} />
    </SearchInner>
  );
};
