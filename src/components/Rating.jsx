import { IoMdStar, IoMdStarOutline } from "react-icons/io";
import styled from "styled-components";

export const RatingFilledIcon = styled(IoMdStar)`
  color: ${({ color, theme }) => color ?? theme.colors.primary};
`;

export const RatingIcon = styled(IoMdStarOutline)`
  color: ${({ color, theme }) => color ?? theme.colors.primary};
`;

export const Rating = ({ value = 5, color = null }) => {
  const rating = Math.ceil(value);

  let arr = new Array(5);
  arr.fill(true);
  arr.fill(false, rating);

  return (
    <div>
      {arr.map((item) => {
        return item ? (
          <RatingFilledIcon color={color} />
        ) : (
          <RatingIcon color={color} />
        );
      })}
    </div>
  );
};
