import React from "react";
import styled, { keyframes } from "styled-components";

import { RatingFilledIcon } from "./Rating";

const IMAGE_WIDTH = 160;
const IMAGE_HEIGHT = 212;

const skeletonKeyframes = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

const CardSkeleton = styled.div`
  width: calc(${IMAGE_WIDTH}px + 20px);
  height: 336px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  margin-top: ${({ theme }) => theme.spacing(1)};
`;

const ProductSkeleton = styled.div`
  display: inline-block;
  height: ${(props) => props.height || "14px"};
  width: ${(props) => props.width || "80%"};
  animation: ${skeletonKeyframes} 1300ms ease-in-out infinite;
  background-color: #eee;
  background-image: linear-gradient(90deg, #eee, #f5f5f5, #eee);
  background-size: 200px 100%;
  background-repeat: no-repeat;
  border-radius: 4px;
  margin-bottom: 8px;
  margin-top: ${(props) => props.marginTop || "0"};
`;

const PictureSkeleton = styled(ProductSkeleton)`
  width: ${IMAGE_WIDTH}px;
  height: ${IMAGE_HEIGHT}px;
  margin: ${({ theme }) => theme.spacing(1, 0, 2, 0)};
  max-height: ${IMAGE_HEIGHT}px;
  max-width: ${IMAGE_WIDTH}px;
  display: block;
`;

const RatingSkeleton = () => {
  return (
    <div>
      <RatingFilledIcon color="#e6e3e3" />
      <RatingFilledIcon color="#e6e3e3" />
      <RatingFilledIcon color="#e6e3e3" />
      <RatingFilledIcon color="#e6e3e3" />
      <RatingFilledIcon color="#e6e3e3" />
    </div>
  );
};

export const Skeleton = () => (
  <CardSkeleton>
    <PictureSkeleton />
    <ProductSkeleton height="10px" width="20%" />
    <ProductSkeleton height="10px" width="35%" marginTop="8px" />
    <RatingSkeleton />
    <ProductSkeleton height="16px" width="20%" marginTop="16px" />
  </CardSkeleton>
);
