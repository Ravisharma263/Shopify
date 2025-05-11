import React from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "destructive" | "ghost" | "link";
type ButtonSize = "sm" | "md" | "lg" | "icon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  fullWidth = false,
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variantStyles = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-900",
    outline: "border border-gray-300 bg-white hover:bg-gray-50 text-gray-700",
    destructive: "bg-red-600 hover:bg-red-700 text-white",
    ghost: "bg-transparent hover:bg-gray-100 text-gray-700",
    link: "bg-transparent underline text-blue-600 hover:text-blue-800"
  };
  
  const sizeStyles = {
    sm: "text-sm px-3 py-1.5",
    md: "text-sm px-4 py-2",
    lg: "text-base px-6 py-3",
    icon: "p-2"
  };
  
  const widthStyles = fullWidth ? "w-full" : "";
  
  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`}
      {...props}
    >
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export { Button };
