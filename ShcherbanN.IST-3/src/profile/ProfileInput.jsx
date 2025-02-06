import * as React from "react";

export function ProfileInput({ label, id, type, placeholder, accept }) {
  return (
    <>
      <label htmlFor={id} className="self-start mt-4 text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        accept={accept}
        className="overflow-hidden p-2.5 mt-2 w-full bg-white rounded-lg border border-gray-300 border-solid text-zinc-400"
        aria-label={label}
      />
    </>
  );
}
