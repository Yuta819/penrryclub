import * as React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={`rounded-lg border bg-white p-4 shadow ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className, ...props }: CardProps) {
  return (
    <div className={`p-4 text-gray-700 ${className}`} {...props}>
      {children}
    </div>
  );
}
