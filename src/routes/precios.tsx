import { queryOptions } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import Pricing from "@/components/Pricing";
import { pricing } from "@/constants/pricing";

const fetchPricing = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return pricing;
};

const pricingQueryOptions = queryOptions({
  queryKey: ["pricing"],
  queryFn: fetchPricing,
});

export const Route = createFileRoute("/precios")({
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(pricingQueryOptions),

  component: RouteComponent,
});

function RouteComponent() {
  const data = Route.useLoaderData();
  return <Pricing items={data} />;
}
