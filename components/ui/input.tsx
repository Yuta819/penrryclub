import * as React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-primary ${className}`}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
