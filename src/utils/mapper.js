import { EMPTY_VALUE } from "./constants";

export const mapProductsAMtoProductsVM = (productsAM) => {
  return productsAM.map((p) => {
    return {
      id: p.id,
      brand: p.brand,
      imgUrl: p.imgUrl,
      price: p.price,
      model: p.model,
      rating: getRandomRating(3, 5),
    };
  });
};

export const mapProductAMtoProductVM = (productAM) => {
  return {
    id: productAM.id,
    name: productAM.name,
    price:
      productAM.price && productAM.price !== "" ? productAM.price : EMPTY_VALUE,
    imgUrl: productAM.imgUrl,
    brand: productAM.brand,
    model: productAM.model,
    options: {
      colors: mapOptionsToSelectOptions(productAM.options.colors),
      storages: mapOptionsToSelectOptions(productAM.options.storages),
    },
    colors: productAM.colors,
    cpu: productAM.cpu ?? EMPTY_VALUE,
    ram: productAM.ram ?? EMPTY_VALUE,
    battery: productAM.battery ?? EMPTY_VALUE,
    backCamera:
      mapArrayOrStringToString(productAM.primaryCamera) ?? EMPTY_VALUE,
    frontalCamera:
      mapArrayOrStringToString(productAM.secondaryCmera) ?? EMPTY_VALUE,
    internalMemory: productAM.internalMemory.join(" / "),
    networkTechnology: productAM.networkTechnology ?? EMPTY_VALUE,
    weight: `${
      productAM.weight && productAM.weight !== ""
        ? productAM.weight
        : EMPTY_VALUE
    } gr.`,
    sim: productAM.sim.toString(),
    os: productAM.os ?? EMPTY_VALUE,
    displayResolution: productAM.displayResolution ?? EMPTY_VALUE,
    dimentions: productAM.dimentions ?? EMPTY_VALUE,
  };
};

const mapOptionsToSelectOptions = (options) => {
  return (
    options &&
    options.map((c) => {
      return { id: c.code, name: c.name };
    })
  );
};

const mapArrayOrStringToString = (value) => {
  if (Array.isArray(value)) {
    return value.join(" ");
  } else {
    return value;
  }
};

const getRandomRating = (min, max) => {
  return Math.random() * (max - min) + min;
};
