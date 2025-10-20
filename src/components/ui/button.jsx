import React from "react";
import { cn } from "@/lib/utils"; // Optional helper (ignore if not used)

export function Button({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`
        inline-flex items-center justify-center 
        px-4 py-2 rounded-full font-semibold transition 
        focus:outline-none focus:ring-2 focus:ring-offset-2 
        ${className}
      `}
    >
      {children}
    </button>
  );
}
