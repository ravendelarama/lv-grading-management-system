import { API } from "@/lib/api";
import { QueryClient } from "@tanstack/react-query";
import {
  Outlet,
  ScrollRestoration,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import * as React from "react";

interface RouteContext {
  api: API;
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouteContext>()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <ScrollRestoration />
      <Outlet />
    </React.Fragment>
  );
}
