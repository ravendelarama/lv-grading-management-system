import { createRouter, RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

// Import the generated route tree
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./components/theme-provider";
import "./index.css";
import { api } from "./lib/api";
import { routeTree } from "./routeTree.gen";

const queryClient = new QueryClient();
// Create a new router instance
const router = createRouter({
  routeTree,
  context: {
    api,
    queryClient,
  },
  defaultPreload: "intent",
  defaultPreloadStaleTime: 0,
  Wrap: ({ children }) => {
    return (
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="light" storageKey="gms-ui-theme">
          {children}
        </ThemeProvider>
      </QueryClientProvider>
    );
  },
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}
