import type { FC, ReactNode } from "react";
import ButtonSvg from "@/assets/svg/button";

export interface IButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  px?: string;
  white?: boolean;
  onClick?: () => void;
}

const Button: FC<IButtonProps> = ({
  children,
  className,
  href,
  px,
  white,
  onClick,
}) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button type="button" className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
