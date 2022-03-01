import { device } from "@/styles/device";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";

const SearchInner = styled("div")`
  position: relative;
  border-radius: ${({ theme }) => theme.spacing(0.5)};
  width: 100%;
  margin-left: 0;

  @media ${device.mobileL} {
    margin-left: ${({ theme }) => theme.spacing(1)};
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
  border-radius: ${({ theme }) => theme.spacing(0.5)};
  padding-left: calc(1em + ${({ theme }) => theme.spacing(3)});
  transition: width;
  transition-duration: 300ms;
  width: auto;
  @media ${device.mobileL} {
    width: 20ch;
    &:focus {
      width: 25ch;
      background-color: ${({ theme }) => theme.colors.lightGray};
    }
  }
`;

export const Search = () => {
  return (
    <SearchInner>
      <SearchIconWrapper>
        <BsSearch />
      </SearchIconWrapper>
      <StyledInputBase placeholder="Search" />
    </SearchInner>
  );
};
