import { createContext, useState } from "react";
import { translations } from "./translations.js";

const initialState = translations["en"];

const TranslationsContext = createContext();

function TranslationsProvider(props) {
  const [translation, setTranslation] = useState("en");

  const language = translations[translation];

  return (
    <TranslationsContext.Provider
      value={{ language, setTranslation, current: translation }}
    >
      {props.children}
    </TranslationsContext.Provider>
  );
}

export { TranslationsContext, TranslationsProvider };
