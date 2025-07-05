import type { QueryClient } from "@tanstack/react-query";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Header from "@/components/Header";
import { Pending } from "@/components/Pending";

interface MyRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRoute<MyRouterContext>({
  component: () => (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Outlet />
        <TanStackRouterDevtools />
      </div>
    </>
  ),
  pendingComponent: Pending,
});
