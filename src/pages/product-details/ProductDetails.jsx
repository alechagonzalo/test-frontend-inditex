import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

import { GiWeight, GiBattery100, GiNetworkBars } from "react-icons/gi";
import { BsCpuFill, BsFillCameraFill, BsFillSimFill } from "react-icons/bs";
import { FaMemory } from "react-icons/fa";
import { MdSdStorage, MdScreenshot } from "react-icons/md";
import { GrAndroid } from "react-icons/gr";
import { AiOutlineFullscreen } from "react-icons/ai";

import { Color } from "@/components/Color";
import { Typography } from "@/components/Typography";
import { theme } from "@/styles/theme";
import { client } from "@/utils/api-client";
import {
  ButtonsContainer,
  Container,
  DetailItemContainer,
  DetailsContainer,
  ImgContainer,
  Label,
  RightSideContainer,
} from "./styles";
import { FadeImage } from "@/components/FadeImage";
import { Container as Centered } from "@/components/Container";
import { Select } from "@/components/Select";
import { Button } from "@/components/Button";
import { EURO_SYMBOL, EMPTY_VALUE } from "@/utils/constants";
import { mapProductAMtoProductVM } from "@/utils/mapper";

const IMAGE_WIDTH = 190;
const IMAGE_HEIGHT = 242;

const DetailItem = ({ title, description, icon, color }) => {
  return (
    <DetailItemContainer>
      <Typography fontSize="subtitle2" color={color ?? theme.colors.hoverGray}>
        {icon ? icon : null} {title}
      </Typography>

      {typeof description === "string" ? (
        <Typography fontSize="subtitle3" color={theme.colors.hoverGray}>
          {description}
        </Typography>
      ) : (
        description
      )}
    </DetailItemContainer>
  );
};

export const ProductDetails = () => {
  const { product_id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedStorage, setSelectedStorage] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const loadData = async () => {
    const data = await client(`api/product/${product_id}`);
    const product = mapProductAMtoProductVM(data);
    setProduct(product);
    if (product.options.colors.length === 1)
      setSelectedColor(product.options.colors[0]);
    if (product.options.storages.length === 1)
      setSelectedStorage(product.options.storages[0]);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleStorageChange = useCallback((option) => {
    setSelectedStorage(option);
  }, []);

  const handleColorChange = useCallback(
    (option) => setSelectedColor(option),
    []
  );

  return product ? (
    <Container>
      <ImgContainer>
        <FadeImage
          src={product.imgUrl}
          loading="lazy"
          style={{
            width: IMAGE_WIDTH,
            height: IMAGE_HEIGHT,
          }}
        />
        <Typography
          fontSize="subtitle3"
          color={theme.colors.primary}
          fontWeight={"400"}
          textTransform={"uppercase"}
        >
          {product.brand}
        </Typography>
        <Typography
          fontSize="h6"
          color={theme.colors.primary}
          fontWeight={"500"}
        >
          {product.model}
        </Typography>
        <Typography
          fontSize="h6"
          color={theme.colors.primary}
          fontWeight={"500"}
        >
          {product.price && EURO_SYMBOL}
          {product.price && product.price !== "" ? product.price : EMPTY_VALUE}
        </Typography>
        <DetailItem
          title="Available colors"
          color={theme.colors.primary}
          description={
            <Centered flexDirection="row">
              {product?.colors.map((color) => {
                return <Color color={color.toLowerCase()} key={color} />;
              })}
            </Centered>
          }
        />
      </ImgContainer>

      <RightSideContainer>
        <ButtonsContainer>
          <Select
            options={product.options.colors}
            optionSelected={selectedColor}
            title="Color"
            onChange={handleColorChange}
          />
          <Select
            title="Storage"
            optionSelected={selectedStorage}
            options={product.options.storages}
            onChange={handleStorageChange}
          />

          <Button
            color={theme.colors.lightSecondary}
            hoverColor={theme.colors.light}
            width="auto"
          >
            <Label fontSize="subtitle3" fontWeight={500}>
              Add to cart{" "}
            </Label>
          </Button>
        </ButtonsContainer>

        <DetailsContainer>
          <DetailItem
            title="CPU"
            description={product.cpu}
            icon={<BsCpuFill />}
          />

          <DetailItem
            title="RAM"
            description={product.ram}
            icon={<FaMemory />}
          />

          <DetailItem
            title="Battery"
            description={product.battery}
            icon={<GiBattery100 />}
          />
          <DetailItem
            title="Back Camera"
            description={product.backCamera}
            icon={<BsFillCameraFill />}
          />

          <DetailItem
            title="Frontal Camera"
            description={product.frontalCamera}
            icon={<BsFillCameraFill />}
          />

          <DetailItem
            title="Storage"
            description={
              <div>
                <Typography fontSize="subtitle3" color={theme.colors.hoverGray}>
                  {product.internalMemory}
                </Typography>
              </div>
            }
            icon={<MdSdStorage />}
          />
          <DetailItem
            title="Network"
            description={product.networkTechnology}
            icon={<GiNetworkBars />}
          />

          <DetailItem
            title="OS"
            description={product.os ?? "-"}
            icon={<GrAndroid />}
          />

          <DetailItem
            title="SIM"
            description={product.sim}
            icon={<BsFillSimFill />}
          />

          <DetailItem
            title="Display"
            description={product.displayResolution}
            icon={<MdScreenshot />}
          />
          <DetailItem
            title="Size"
            description={product.dimentions}
            icon={<AiOutlineFullscreen />}
          />
          <DetailItem
            title="Weight"
            description={product.weight}
            icon={<GiWeight />}
          />
        </DetailsContainer>
      </RightSideContainer>
    </Container>
  ) : null;
};

DetailItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  icon: PropTypes.element,
  color: PropTypes.string,
};
