"use client";

import clsx from "clsx";
import Link from "next/link";
import { MouseEvent } from "react";

type Variant =
  | "primary"
  | "primary-outline"
  | "secondary"
  | "secondary-outline"
  | "dark"
  | "dark-outline";

const variantStyles: Record<Variant, string> = {
  primary: "border-primary bg-primary text-light",
  secondary: "border-secondary bg-secondary text-light",
  dark: "border-dark bg-dark text-light",
  "primary-outline": "border-primary text-primary bg-light",
  "secondary-outline": "border-secondary text-secondary bg-light",
  "dark-outline": "border-dark text-dark bg-light",
};

interface ButtonProps {
  children: React.ReactNode;
  className?: string;

  variant?: Variant;

  type?: "button" | "submit" | "reset";
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;

  href?: string;
  form?: string;
}

const Button = ({
  children,
  className = "",
  variant = "primary",
  type = "button",
  onClick = () => {},
  disabled = false,
  href = "",
  form,
}: ButtonProps) => {
  const classes = clsx(
    className,
    "py-2 px-6 border rounded-sm text-center font-semibold capitalize grid place-items-center",
    "transition-all ease-in-out duration-300",
    "disabled:bg-neutral-300 disabled:text-uiWhite disabled:border-neutral-300",

    variantStyles[variant]
  );

  // If href is provided, render a link
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={classes}
      type={type}
      disabled={disabled}
      aria-disabled={disabled}
      {...(form ? { form } : {})}
    >
      {children}
    </button>
  );
};

export default Button;
