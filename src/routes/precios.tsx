import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import Pricing from "@/components/Pricing";
import { pricing } from "@/constants/pricing";
import type { PricingListItem } from "@/components/PricingList";
import { Pending } from "@/components/Pending";

const fetchPricing = async () => {
  return await new Promise<PricingListItem[]>((resolve) =>
    setTimeout(() => resolve(pricing), 2000),
  );
};

export const Route = createFileRoute("/precios")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data, isLoading } = useQuery({
    queryKey: ["pricing"],
    queryFn: fetchPricing,
  });

  if (isLoading) return <Pending />;

  return <Pricing items={data as PricingListItem[]} />;
}
