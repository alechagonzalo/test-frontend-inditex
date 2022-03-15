/**
 * @vi-environment jsdom
 */

import { renderHook } from "@testing-library/react-hooks";
import { QueryClient, QueryClientProvider } from "react-query";
import { getProducts } from "./useApi.hook";
import { vi } from "vitest";
import { productsMock } from "@/mocks/api";
import { ThemeProvider } from "styled-components";
import { TranslationsProvider } from "@/i18n/translations.context";
import { theme } from "@/styles/theme";

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

vi.mock("./useApi.hook", () => ({
  getProducts: vi.fn().mockImplementation(() => ({
    data: productsMock,
    isLoading: false,
    isError: false,
    error: undefined,
    refetch: vi.fn(),
    mutate: vi.fn(),
    query: vi.fn(),
    useQuery: vi.fn(),
    useMutation: vi.fn(),
  })),
}));

test("Load data", async () => {
  const { result, waitFor } = renderHook(() => getProducts(), {
    wrapper: createWrapper(),
  });

  await waitFor(() => expect(result.current.data).toBeDefined());

  expect(result.current.data).toBeDefined();
});
