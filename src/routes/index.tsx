import { createFileRoute } from "@tanstack/react-router";
import Benefits from "@/components/Benefits";
import Hero from "@/components/Hero";
import { Pending } from "@/components/Pending";

export const Route = createFileRoute("/")({
  component: App,
  pendingComponent: Pending,
});

function App() {
  return (
    <>
      <Hero />
      <Benefits />
    </>
  );
}
