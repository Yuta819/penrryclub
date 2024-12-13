"use client";

import React from "react";

interface DecoratedTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const DecoratedTitle: React.FC<DecoratedTitleProps> = ({
  children,
  className = "",
}) => {
  return (
    <h2
      className={`relative inline-block text-4xl font-bold mb-12 brush-font ${className} group`}
    >
      {children}
      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 transform scale-x-0 transition-transform duration-300 delay-150 group-hover:scale-x-100"></span>
      <span className="absolute left-1/2 top-0 w-0.5 h-full bg-gradient-to-b from-red-500 via-orange-500 to-yellow-500 transform -translate-x-1/2 scale-y-0 transition-transform duration-300 group-hover:scale-y-100"></span>
    </h2>
  );
};
