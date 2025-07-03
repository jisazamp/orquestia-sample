import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <h1 className="text-xl text-gray-700">This is layout component!</h1>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
