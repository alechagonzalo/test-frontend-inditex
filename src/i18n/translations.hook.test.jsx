/**
 * @jest-environment jsdom
 */

import { useTranslations } from "@/i18n/translations.hook";

import { act, renderHook } from "@testing-library/react-hooks";
import { translations } from "./translations";
import { TranslationsProvider } from "./translations.context";

const wrapper = ({ children }) => (
  <TranslationsProvider>{children}</TranslationsProvider>
);

describe("useTranslation", () => {
  it("should change language to Spanish", () => {
    const { result } = renderHook(() => useTranslations(), { wrapper });
    act(() => {
      result.current.setTranslation("es");
    });
    expect(result.current.language.productList.productItem.title).toBe(
      translations.es.productList.productItem.title
    );
  });
});
