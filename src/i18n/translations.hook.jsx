import { useContext } from "react";
import { TranslationsContext } from "./translations.context";

export const useTranslations = () => {
  return useContext(TranslationsContext);
};
