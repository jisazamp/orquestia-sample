import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Outlet />
        <TanStackRouterDevtools />
      </div>
    </>
  ),
});
