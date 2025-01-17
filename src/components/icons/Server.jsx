import * as React from "react";

const SVGComponent = ({ className = "", ...props }) => {
  return (
    <svg
      viewBox="0 0 64 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Keep black background */}
      <rect
        x={0.025}
        y={0.825}
        width={63.632}
        height={63.632}
        rx={31.816}
        fill="#1D1C20"
      />

      {/* Inner path with top-to-bottom gradient */}
      <path
        fill="url(#all)"
        d="M43.23 22.84a25.47 25.47 0 0 0-6.38-1.98c-.3.54-.57 1.1-.82 1.67a23.62 23.62 0 0 0-7.07 0c-.25-.57-.52-1.13-.82-1.67-2.2.38-4.35 1.05-6.38 1.98a26.01 26.01 0 0 0-4.59 17.63A25.66 25.66 0 0 0 25 44.42a19 19 0 0 0 1.68-2.72 16.6 16.6 0 0 1-2.64-1.26l.65-.5a18.3 18.3 0 0 0 15.64 0c.21.18.43.35.65.5-.85.5-1.73.92-2.65 1.27a17.9 17.9 0 0 0 1.68 2.7 25.54 25.54 0 0 0 7.83-3.94 26 26 0 0 0-4.6-17.63ZM27.36 36.92c-1.52 0-2.78-1.39-2.78-3.1 0-1.71 1.21-3.12 2.78-3.12 1.56 0 2.81 1.4 2.78 3.12-.02 1.71-1.22 3.1-2.78 3.1Zm10.27 0c-1.52 0-2.78-1.39-2.78-3.1 0-1.71 1.22-3.12 2.78-3.12 1.57 0 2.81 1.4 2.78 3.12-.02 1.71-1.22 3.1-2.78 3.1Z"
      />

      <defs>
        {/* Top-to-bottom gradient for the inner path */}
        <linearGradient
          id="all"
          x1="32"
          y1="0"
          x2="32"
          y2="65"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#db2e20" />
          <stop offset={1} stopColor="#f20165" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default SVGComponent;