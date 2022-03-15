import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

import { Rating } from "./Rating";
import { Typography } from "./Typography";
import { FadeImage } from "./FadeImage";
import { EMPTY_VALUE, EURO_SYMBOL } from "@/utils/constants";

const IMAGE_WIDTH = 160;
const IMAGE_HEIGHT = 212;

const ProductItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(5)};
  cursor: pointer;
  width: ${IMAGE_WIDTH} * 1.5;
  &:hover {
    transform: scale(1.02);
    transition: all ease 100ms;
  }
`;

const ImagePlaceHolder = styled.div`
  width: ${IMAGE_WIDTH};
  height: ${IMAGE_HEIGHT};
  &:hover {
    opacity: 0.65;
  }
`;

const TextUpperCase = styled(Typography)`
  font-size: ${({ theme }) => theme.fontSizes.subtitle1};
  margin: ${({ theme }) => theme.spacing(1, 1, 0.5, 1)};
  text-transform: uppercase;
  font-weight: 500;
`;

export const ProductItem = ({ item }) => {
  const { imgUrl, brand, model, price, rating } = item;
  const navigate = useNavigate();

  return (
    <ProductItemContainer
      onClick={() => {
        navigate(`/products/${item.id}`);
      }}
    >
      <ImagePlaceHolder>
        <FadeImage
          src={imgUrl}
          loading="lazy"
          style={{
            width: IMAGE_WIDTH,
            height: IMAGE_HEIGHT,
          }}
        />
      </ImagePlaceHolder>
      <TextUpperCase>{brand ?? EMPTY_VALUE}</TextUpperCase>
      <Typography fontSize="subtitle1"> {model ?? EMPTY_VALUE}</Typography>
      <Rating value={rating ?? 0} />
      <TextUpperCase>
        <Typography fontSize="h6">
          {price && EURO_SYMBOL}
          {price && price !== "" ? price : EMPTY_VALUE}
        </Typography>
      </TextUpperCase>
    </ProductItemContainer>
  );
};

ProductItem.propTypes = {
  item: PropTypes.object.isRequired,
};
