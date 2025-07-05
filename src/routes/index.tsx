import { createFileRoute } from "@tanstack/react-router";
import Benefits from "@/components/Benefits";
import Hero from "@/components/Hero";

export const Route = createFileRoute("/")({
  component: App,
  pendingComponent: () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/20">
      <div className="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin" />
    </div>
  ),
});

function App() {
  return (
    <>
      <Hero />
      <Benefits />
    </>
  );
}
