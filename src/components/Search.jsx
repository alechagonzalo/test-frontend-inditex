import { device } from "@/styles/device";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";

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
  box-shadow: -1px 45px 78px -20px rgba(0, 0, 0, 0.58);
  background: rgb(239, 239, 239);
  outline: none;
  height: ${({ theme }) => theme.spacing(3)};
  @media ${device.tablet} {
    width: 25ch;
    &:focus {
      width: 30ch;
      border: none;
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
