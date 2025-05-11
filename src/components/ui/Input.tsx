import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", label, error, fullWidth = false, id, ...props }, ref) => {
    const inputId = id || React.useId();
    
    return (
      <div className={`${fullWidth ? "w-full" : ""}`}>
        {label && (
          <label 
            htmlFor={inputId} 
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {label}
          </label>
        )}
        <input
          id={inputId}
          ref={ref}
          className={`block rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm placeholder-gray-400
                    focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500
                    disabled:cursor-not-allowed disabled:opacity-50
                    ${error ? "border-red-500" : ""}
                    ${fullWidth ? "w-full" : ""}
                    ${className}`}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
