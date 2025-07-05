import { Link } from "@tanstack/react-router";
import smallSphere from "@/assets/4-small.png";
import stars from "@/assets/svg/stars.svg";
import { LeftLine, RightLine } from "@/design/pricing";
import Heading from "../Heading";
import PricingList, { type PricingListItem } from "../PricingList";
import Section from "../Section";

interface IPricingProps<T extends PricingListItem> {
  items: T[];
}

const Pricing = <T extends PricingListItem>({ items }: IPricingProps<T>) => {
  return (
    <Section
      className="overflow-hidden flex items-center justify-center"
      id="pricing"
    >
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>
        <Heading
          tag="Nuestros planes"
          title="Paga una vez usa para siempre"
          className="flex flex-col items-center"
        />
        <div className="relative">
          <PricingList items={items} />
          <LeftLine />
          <RightLine />
        </div>
        <div className="flex justify-center mt-10">
          <Link
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
            to="/precios"
          >
            Mira todos los detalles
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
