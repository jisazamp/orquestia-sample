import type { PropsWithChildren } from "react";
import brackets from "@/assets/svg/brackets";

interface ITagLineProps extends PropsWithChildren {
  className?: string;
}

const TagLine = ({ className, children }: ITagLineProps) => {
  return (
    <div className={`tagline flex items-center ${className || ""}`}>
      {brackets("left")}
      <div className="mx-3 text-n-3">{children}</div>
      {brackets("right")}
    </div>
  );
};

export default TagLine;
