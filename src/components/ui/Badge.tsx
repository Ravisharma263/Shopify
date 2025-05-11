import React from "react";

type BadgeVariant = "default" | "secondary" | "outline" | "destructive";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
  children: React.ReactNode;
}

const Badge = ({
  variant = "default",
  className = "",
  children,
  ...props
}: BadgeProps) => {
  const baseStyles = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium";
  
  const variantStyles = {
    default: "bg-blue-100 text-blue-800",
    secondary: "bg-gray-100 text-gray-800",
    destructive: "bg-red-100 text-red-800",
    outline: "border border-gray-300 text-gray-700",
  };
  
  return (
    <span 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export { Badge };
