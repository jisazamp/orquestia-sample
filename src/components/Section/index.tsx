import type { FC, PropsWithChildren, RefObject } from "react";
import SectionSvg from "@/assets/svg/section";

interface ISectionProps extends PropsWithChildren {
  className?: string;
  crosses?: boolean;
  crossesOffset?: string;
  customPaddings?: boolean;
  ref?: RefObject<HTMLDivElement | null>;
  id?: string;
}

const Section: FC<ISectionProps> = ({
  children,
  className,
  crosses,
  ref,
  crossesOffset,
  customPaddings,
  id,
}) => {
  return (
    <div
      ref={ref}
      id={id}
      className={`
      relative 
      ${
        customPaddings ||
        `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""}`
      } 
      ${className || ""}`}
    >
      {children}

      <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10" />
      <div className="hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10" />

      {crosses && (
        <>
          <div
            className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 ${
              crossesOffset && crossesOffset
            } pointer-events-none lg:block xl:left-10 right-10`}
          />
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </div>
  );
};

export default Section;
