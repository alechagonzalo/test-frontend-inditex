import { IoMdStar, IoMdStarOutline } from "react-icons/io";
import styled from "styled-components";
import PropTypes from "prop-types";

export const RatingFilledIcon = styled(IoMdStar)`
  color: ${({ color, theme }) => color ?? theme.colors.primary};
`;

export const RatingIcon = styled(IoMdStarOutline)`
  color: ${({ color, theme }) => color ?? theme.colors.primary};
`;

export const Rating = ({ value = 5, color = null }) => {
  const rating = Math.ceil(value);

  let ratingArray = new Array(5);
  ratingArray.fill(true);
  ratingArray.fill(false, rating);

  return (
    <div>
      {ratingArray.map((item, i) => {
        return item ? (
          <RatingFilledIcon color={color} key={i} />
        ) : (
          <RatingIcon color={color} key={i} />
        );
      })}
    </div>
  );
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
};
