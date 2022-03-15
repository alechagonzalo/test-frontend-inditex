import PropTypes from "prop-types";

import { GiWeight, GiBattery100, GiNetworkBars } from "react-icons/gi";
import { BsCpuFill, BsFillCameraFill, BsFillSimFill } from "react-icons/bs";
import { FaMemory } from "react-icons/fa";
import { MdSdStorage, MdScreenshot } from "react-icons/md";
import { GrAndroid } from "react-icons/gr";
import { AiOutlineFullscreen } from "react-icons/ai";

import { useTranslations } from "@/i18n/translations.hook";
import { Color } from "@/components/Color";
import { Typography } from "@/components/Typography";
import { FadeImage } from "@/components/FadeImage";
import { Container as Centered } from "@/components/Container";
import { Select } from "@/components/Select";
import { EURO_SYMBOL, EMPTY_VALUE } from "@/utils/constants";
import { Loader } from "@/components/Loader";
import { theme } from "@/styles/theme";
import {
  ButtonsContainer,
  Container,
  DetailItemContainer,
  DetailsContainer,
  ImgContainer,
  LoaderCointainer,
  RightSideContainer,
} from "./styles";
import { AddToCart, GoBack } from "./Actions";
import { useProductDetails } from "./ProductDetails.hook";

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
  const { language } = useTranslations();

  const {
    productItem,
    selectedStorage,
    selectedColor,
    isLaptop,
    handleStorageChange,
    handleColorChange,
  } = useProductDetails();

  if (!productItem)
    return (
      <LoaderCointainer>
        <Loader size={32} />
      </LoaderCointainer>
    );

  return (
    <Container>
      <ImgContainer>
        <FadeImage
          src={productItem.imgUrl}
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
          {productItem.brand}
        </Typography>
        <Typography
          fontSize="h6"
          color={theme.colors.primary}
          fontWeight={"500"}
        >
          {productItem.model}
        </Typography>
        <Typography
          fontSize="h6"
          color={theme.colors.primary}
          fontWeight={"500"}
        >
          {productItem.price && EURO_SYMBOL}
          {productItem.price && productItem.price !== ""
            ? productItem.price
            : EMPTY_VALUE}
        </Typography>
        <DetailItem
          title={language.productDetails.colors}
          color={theme.colors.primary}
          description={
            <Centered flexDirection="row">
              {productItem?.colors.map((color) => {
                return <Color color={color.toLowerCase()} key={color} />;
              })}
            </Centered>
          }
        />
      </ImgContainer>

      <RightSideContainer>
        <ButtonsContainer>
          {isLaptop && <GoBack />}

          <Select
            options={productItem.options.colors}
            optionSelected={selectedColor}
            title={language.productDetails.select.color}
            onChange={handleColorChange}
          />
          <Select
            title={language.productDetails.select.storage}
            optionSelected={selectedStorage}
            options={productItem.options.storages}
            onChange={handleStorageChange}
          />
          <AddToCart
            selectedColor={selectedColor}
            selectedStorage={selectedStorage}
          />
        </ButtonsContainer>

        <DetailsContainer>
          <DetailItem
            title={language.productDetails.product.cpu}
            description={productItem.cpu}
            icon={<BsCpuFill />}
          />

          <DetailItem
            title={language.productDetails.product.ram}
            description={productItem.ram}
            icon={<FaMemory />}
          />

          <DetailItem
            title={language.productDetails.product.battery}
            description={productItem.battery}
            icon={<GiBattery100 />}
          />
          <DetailItem
            title={language.productDetails.product.backCamera}
            description={productItem.backCamera}
            icon={<BsFillCameraFill />}
          />

          <DetailItem
            title={language.productDetails.product.frontCamera}
            description={productItem.frontalCamera}
            icon={<BsFillCameraFill />}
          />

          <DetailItem
            title={language.productDetails.product.storage}
            description={
              <div>
                <Typography fontSize="subtitle3" color={theme.colors.hoverGray}>
                  {productItem.internalMemory}
                </Typography>
              </div>
            }
            icon={<MdSdStorage />}
          />
          <DetailItem
            title={language.productDetails.product.network}
            description={productItem.networkTechnology}
            icon={<GiNetworkBars />}
          />

          <DetailItem
            title={language.productDetails.product.os}
            description={productItem.os ?? "-"}
            icon={<GrAndroid />}
          />

          <DetailItem
            title={language.productDetails.product.sim}
            description={productItem.sim}
            icon={<BsFillSimFill />}
          />

          <DetailItem
            title={language.productDetails.product.display}
            description={productItem.displayResolution}
            icon={<MdScreenshot />}
          />
          <DetailItem
            title={language.productDetails.product.size}
            description={productItem.dimentions}
            icon={<AiOutlineFullscreen />}
          />
          <DetailItem
            title={language.productDetails.product.weight}
            description={productItem.weight}
            icon={<GiWeight />}
          />
        </DetailsContainer>
      </RightSideContainer>
    </Container>
  );
};

DetailItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  icon: PropTypes.element,
  color: PropTypes.string,
};
