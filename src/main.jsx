import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { QueryClientProvider, QueryClient, QueryCache } from "react-query";
import { Toaster } from "react-hot-toast";
import { notification } from "./components/notification";
import App from "./App";
import { TranslationsProvider } from "./i18n/translations.context";
import { theme } from "./styles/theme";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 3600000,
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
  queryCache: new QueryCache({
    onError: () => {
      notification({
        text: "An error has occurred",
        type: "error",
      });
    },
  }),
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <TranslationsProvider>
        <QueryClientProvider client={queryClient}>
          <Toaster
            toastOptions={{
              className: "",
              style: {
                padding: "16px",
                color: theme.colors.primary,
                boxShadow:
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                backgroundColor: theme.colors.hoverGray,
              },
            }}
          />
          <App />
        </QueryClientProvider>
      </TranslationsProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
