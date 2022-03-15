import { useEffect, useState, useCallback } from "react";
import styled from "styled-components";
import { IoMdArrowRoundUp } from "react-icons/io";

import { Button } from "./Button";

const StyledButton = styled(Button)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  border-radius: 100px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 5px -1px,
    rgb(0 0 0 / 14%) 0px 6px 10px 0px, rgb(0 0 0 / 12%) 0px 1px 18px 0px;
  width: ${({ theme }) => theme.spacing(5)};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.lightPrimary};
  font-size: ${({ theme }) => theme.spacing(2.5)};
`;

export const GoTop = () => {
  const [showButton, setShowButton] = useState(false);

  const goTopEvent = useCallback(() => {
    if (window.pageYOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", goTopEvent);
    return () => {
      window.removeEventListener("scroll", goTopEvent);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return showButton ? (
    <StyledButton onClick={scrollToTop}>
      <IoMdArrowRoundUp />
    </StyledButton>
  ) : null;
};

export default GoTop;
