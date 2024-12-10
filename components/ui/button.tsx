import * as React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "outline"; // 必要に応じて追加
  size?: "default" | "sm" | "md" | "lg" | "icon"; // 必要に応じて追加
}

export function Button({
  children,
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  const variantClasses = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    outline:
      "border border-gray-300 text-gray-300 hover:bg-gray-300 hover:text-gray-900",
  };

  const sizeClasses = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  };

  const finalClassName = [
    "inline-flex items-center justify-center font-medium rounded",
    variantClasses[variant || "primary"],
    sizeClasses[size || "md"],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={finalClassName} {...props}>
      {children}
    </button>
  );
}
