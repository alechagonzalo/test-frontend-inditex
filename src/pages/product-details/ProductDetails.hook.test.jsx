/**
 * @vi-environment jsdom
 */

import { act, renderHook } from "@testing-library/react-hooks";
import { QueryClient, QueryClientProvider } from "react-query";
import { vi, it } from "vitest";
import { productItemMock } from "@/mocks/api";
import { ThemeProvider } from "styled-components";
import { TranslationsProvider } from "@/i18n/translations.context";
import { theme } from "@/styles/theme";
import { getProductItem } from "@/hooks/api/useApi.hook";
import { useProductDetails } from "./ProductDetails.hook";
import { mapProductAMtoProductVM } from "@/utils/mapper";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  // eslint-disable-next-line react/display-name
  return ({ children }) => (
    <TranslationsProvider>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </ThemeProvider>
    </TranslationsProvider>
  );
};

vi.mock("@/hooks/api/useApi.hook", () => ({
  getProductItem: vi.fn(),
}));

describe("Product item hook test", () => {
  it("Load Product item successfully", async () => {
    getProductItem.mockImplementation(() => ({
      data: productItemMock,
      isLoading: false,
      isError: false,
      error: undefined,
      refetch: vi.fn(),
      mutate: vi.fn(),
      query: vi.fn(),
      useQuery: vi.fn(),
      useMutation: vi.fn(),
    }));

    const { result, waitFor } = renderHook(() => useProductDetails(), {
      wrapper: createWrapper(),
    });

    await waitFor(() =>
      expect(result.current.productItem).toEqual(
        mapProductAMtoProductVM(productItemMock)
      )
    );
  });

  it("Load Product item failed", async () => {
    getProductItem.mockImplementation(() => ({
      data: undefined,
      isLoading: false,
      isError: true,
      error: "Error",
      refetch: vi.fn(),
      mutate: vi.fn(),
      query: vi.fn(),
      useQuery: vi.fn(),
      useMutation: vi.fn(),
    }));

    const { result, waitFor } = renderHook(() => useProductDetails(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.productItem).toEqual(null));
  });

  it("Select color test", async () => {
    getProductItem.mockImplementation(() => ({
      data: productItemMock,
      isLoading: false,
      isError: false,
      error: undefined,
      refetch: vi.fn(),
      mutate: vi.fn(),
      query: vi.fn(),
      useQuery: vi.fn(),
      useMutation: vi.fn(),
    }));

    const { result, waitFor } = renderHook(() => useProductDetails(), {
      wrapper: createWrapper(),
    });

    expect(result.current.selectedColor).toEqual({
      id: 1000,
      name: "Black",
    });

    await waitFor(() => {
      act(() =>
        result.current.handleColorChange({
          id: 1,
          name: "Red",
        })
      );
      expect(result.current.selectedColor).toEqual({
        id: 1,
        name: "Red",
      });
    });
  });

  it("Select size test", async () => {
    getProductItem.mockImplementation(() => ({
      data: productItemMock,
      isLoading: false,
      isError: false,
      error: undefined,
      refetch: vi.fn(),
      mutate: vi.fn(),
      query: vi.fn(),
      useQuery: vi.fn(),
      useMutation: vi.fn(),
    }));

    const { result, waitFor } = renderHook(() => useProductDetails(), {
      wrapper: createWrapper(),
    });

    expect(result.current.selectedStorage).toEqual(null);

    await waitFor(() => {
      act(() =>
        result.current.handleStorageChange({
          id: 2000,
          name: "16 GB",
        })
      );
      expect(result.current.selectedStorage).toEqual({
        id: 2000,
        name: "16 GB",
      });
    });
  });
});
