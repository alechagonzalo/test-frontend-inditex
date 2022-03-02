import { EMPTY_VALUE, EURO_SYMBOL } from "@/utils/constants";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Rating } from "./Rating";
import { Typography } from "./Typography";

const IMAGE_WIDTH = 160;
const IMAGE_HEIGHT = 212;

const getRandomRating = (min, max) => {
  return Math.random() * (max - min) + min;
};

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
  const { product_id } = useParams();
  const { imgUrl, brand, id, model, price } = item;
  const rating = getRandomRating(3, 5);

  return (
    /*  <Fade in={!!item} style={{ transitionDelay: item ? "500ms" : "0ms" }}> */
    <ProductItemContainer>
      <ImagePlaceHolder>
        <img
          src={imgUrl}
          loading="lazy"
          alt={model}
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
