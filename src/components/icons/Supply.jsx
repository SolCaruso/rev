import * as React from "react";

const SVGComponent = ({ className = '', ...props }) => {
  return (
    <svg
      viewBox="0 0 64 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Black circular background */}
      <rect
        x={0.025}
        y={0.825}
        width={63.632}
        height={63.632}
        rx={31.816}
        fill="#1D1C20"
      />

      {/* Triangular paths, each with a new top-to-bottom gradient */}
      <path
        fill="url(#az)"
        d="M44.76 32.02 32.63 39.3l-12.14-7.28A1.16 1.16 0 0 0 19.3 34l12.73 7.64a1.16 1.16 0 0 0 1.2 0L45.94 34a1.16 1.16 0 1 0-1.2-1.98Z"
      />
      <path
        fill="url(#bz)"
        d="m44.76 37.3-12.13 7.28-12.14-7.28a1.16 1.16 0 1 0-1.19 1.99l12.73 7.63a1.16 1.16 0 0 0 1.2 0l12.72-7.63a1.16 1.16 0 0 0-1.2-1.99Z"
      />
      <path
        fill="url(#cz)"
        d="m19.3 28.99 11.55 6.93a3.44 3.44 0 0 0 3.55 0l11.55-6.93a1.16 1.16 0 0 0 0-1.99L34.4 20.07a3.44 3.44 0 0 0-3.55 0L19.3 27a1.16 1.16 0 0 0 0 1.99Z"
      />

      <defs>
        {/* Top-to-bottom gradient for each path */}
        <linearGradient
          id="az"
          x1="32"
          y1="0"
          x2="32"
          y2="65"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#db2e20" />
          <stop offset={1} stopColor="#f20165" />
        </linearGradient>

        <linearGradient
          id="bz"
          x1="32"
          y1="0"
          x2="32"
          y2="65"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#db2e20" />
          <stop offset={1} stopColor="#f20165" />
        </linearGradient>

        <linearGradient
          id="cz"
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