import * as React from "react";

export function Button({ children, variant = "primary" }) {
  const baseStyles =
    "px-16 py-2 mt-4 text-base text-center whitespace-nowrap rounded-lg";
  const variantStyles = {
    primary: "bg-blue-500 text-white",
    link: "text-blue-500 bg-transparent",
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]}`}>
      {children}
    </button>
  );
}
