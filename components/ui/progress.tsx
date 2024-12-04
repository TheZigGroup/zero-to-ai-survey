"use client";

import * as React from "react";

interface ProgressProps {
  value: number; // Value of the progress bar (0 to 100)
  className?: string; // Additional classes for customization
}

const Progress: React.FC<ProgressProps> = ({ value, className }) => {
  // Ensure the value stays within the range of 0 to 100
  const safeValue = Math.min(Math.max(value, 0), 100);

  return (
    <div
      className={`relative w-full h-2 bg-secondary rounded-none overflow-hidden ${className}`}
    >
      <div
        className="h-full bg-primary transition-transform"
        style={{ width: `${safeValue}%` }}
      />
    </div>
  );
};

export { Progress };