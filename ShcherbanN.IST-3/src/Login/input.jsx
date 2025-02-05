import * as React from "react";

export function Input({ type, placeholder, id, ariaLabel }) {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      aria-label={ariaLabel}
      className="overflow-hidden p-2.5 mt-4 text-base whitespace-nowrap bg-white rounded-lg border border-gray-300 border-solid text-zinc-400 w-full"
    />
  );
}
