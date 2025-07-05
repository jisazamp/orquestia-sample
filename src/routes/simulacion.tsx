import { useQuery } from "@tanstack/react-query";
import { createFileRoute, Link } from "@tanstack/react-router";
import { httpClient } from "@/client/axios";
import { Pending } from "@/components/Pending";

type Response = { title: string; message: string };

const fetchSimulacion = async () => httpClient.get<Response>("/api/simulacion");

export const Route = createFileRoute("/simulacion")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data, isLoading, isError } = useQuery({
    queryFn: fetchSimulacion,
    queryKey: ["simulacion"],
  });

  if (isLoading) return <Pending />;

  if (isError)
    return (
      <div className="p-8 max-w-xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">Algo salió mal...</h1>
        <Link to="/">
          <button type="button">Volver al inicio</button>
        </Link>
      </div>
    );

  return (
    <div className="p-8 max-w-xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4">{data?.data.title}</h1>
      <p className="text-lg text-gray-600">{data?.data.message}</p>
    </div>
  );
}
