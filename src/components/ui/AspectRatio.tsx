
import React from "react";

interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
  ratio?: number;
  children: React.ReactNode;
}

const AspectRatio = ({
  ratio = 1,
  className = "",
  children,
  ...props
}: AspectRatioProps) => {
  return (
    <div className={`relative ${className}`} style={{ paddingBottom: `${(1 / ratio) * 100}%` }} {...props}>
      <div className="absolute inset-0">
        {children}
      </div>
    </div>
  );
};

export default AspectRatio;
