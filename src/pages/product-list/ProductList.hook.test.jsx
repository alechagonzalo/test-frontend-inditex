/**
 * @vi-environment jsdom
 */

import { act, renderHook } from "@testing-library/react-hooks";
import { QueryClient, QueryClientProvider } from "react-query";
import { vi, it } from "vitest";
import { productsMock } from "@/mocks/api";
import { ThemeProvider } from "styled-components";
import { TranslationsProvider } from "@/i18n/translations.context";
import { theme } from "@/styles/theme";
import { useProductList } from "./ProductList.hook";
import { getProducts } from "@/hooks/api/useApi.hook";

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
  getProducts: vi.fn(),
}));

describe("Product List test", () => {
  it("Load Product List items successfully", async () => {
    getProducts.mockImplementation(() => ({
      data: productsMock,
      isLoading: false,
      isError: false,
      error: undefined,
      refetch: vi.fn(),
      mutate: vi.fn(),
      query: vi.fn(),
      useQuery: vi.fn(),
      useMutation: vi.fn(),
    }));

    const { result, waitFor } = renderHook(() => useProductList(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isLoading).toBeFalsy());
    expect(result.current.filteredProducts).not.toBe([]);
  });
  it("Not Load Product List items when api call fails", async () => {
    getProducts.mockImplementation(() => ({
      data: null,
      isLoading: false,
      isError: false,
      error: undefined,
      refetch: vi.fn(),
      mutate: vi.fn(),
      query: vi.fn(),
      useQuery: vi.fn(),
      useMutation: vi.fn(),
    }));
    const { result, waitFor } = renderHook(() => useProductList(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => expect(result.current.isLoading).toBeFalsy());
    expect(result.current.filteredProducts).toEqual([]);
  });

  it("Change filter", async () => {
    getProducts.mockImplementation(() => ({
      data: productsMock,
      isLoading: false,
      isError: false,
      error: undefined,
      refetch: vi.fn(),
      mutate: vi.fn(),
      query: vi.fn(),
      useQuery: vi.fn(),
      useMutation: vi.fn(),
    }));
    const { result, waitFor } = renderHook(() => useProductList(), {
      wrapper: createWrapper(),
    });

    act(() => {
      result.current.handleFilter({ target: { value: "Iconia Tab" } });
    });

    await waitFor(() => {
      expect(result.current.filter).toEqual("Iconia Tab");
    });
  });
});
