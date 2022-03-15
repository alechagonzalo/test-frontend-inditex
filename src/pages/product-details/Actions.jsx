import { useNavigate } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import { IoCart } from "react-icons/io5";

import { Loader } from "@/components/Loader";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { theme } from "@/styles/theme";
import { Label } from "./styles";
import { addToCart } from "@/hooks/api/useApi.hook";
import { useTranslations } from "@/i18n/translations.hook";
import PropTypes from "prop-types";

export const GoBack = () => {
  const navigate = useNavigate();

  return (
    <Button
      color={theme.colors.lightGray}
      hoverColor={theme.colors.hoverGray}
      width="auto"
      onClick={() => {
        navigate(-1);
      }}
    >
      <Container flexDirection="row">
        <RiArrowGoBackFill fontSize={"16px"} />
      </Container>
    </Button>
  );
};

export const AddToCart = ({ selectedStorage, selectedColor }) => {
  const { isLoading: isLoadingCart, mutate: addToCartFn } = addToCart();

  const { language } = useTranslations();

  const handleAddToCart = () => {
    if (isLoadingCart) return;

    const itemToAdd = {
      id: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
      storageCode: selectedColor?.id,
      colorCode: selectedStorage?.id,
    };

    addToCartFn(itemToAdd);
  };

  return (
    <Button
      color={
        !selectedStorage || !selectedColor
          ? theme.colors.lightGray
          : theme.colors.hoverGray
      }
      hoverColor={theme.colors.lightSecondary}
      width="auto"
      onClick={handleAddToCart}
      disabled={!selectedStorage || !selectedColor}
    >
      <Container flexDirection="row">
        <Label
          fontSize="subtitle3"
          fontWeight={500}
          color={
            !selectedStorage || !selectedColor
              ? theme.colors.disabledGray
              : theme.colors.primary
          }
        >
          {language.productDetails.button.addToCart}
        </Label>
        {isLoadingCart ? (
          <Loader size={10} color={theme.colors.primary} />
        ) : (
          <IoCart fontSize={"16px"} />
        )}
      </Container>
    </Button>
  );
};

AddToCart.propTypes = {
  selectedStorage: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
  selectedColor: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
};
