import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div>
      Hola mundo
      <Link to="/about">Ir a about</Link>
    </div>
  );
}
