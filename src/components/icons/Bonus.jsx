import * as React from "react";

const SVGComponent = ({ className = "", ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 68 68"
      className={className}
      {...props}
    >
      <path
        fill="url(#ab)"
        d="M33.96.35a33.54 33.54 0 0 0-33.5 33.5 33.54 33.54 0 0 0 33.5 33.5 33.54 33.54 0 0 0 33.5-33.5A33.54 33.54 0 0 0 33.96.35Zm0 61.42A27.95 27.95 0 0 1 6.04 33.85 27.95 27.95 0 0 1 33.96 5.94a27.95 27.95 0 0 1 27.92 27.91 27.95 27.95 0 0 1-27.92 27.92Zm-5.58-33.5c0 1.06.75 1.95 1.8 2.12l8.48 1.42a7.7 7.7 0 0 1 6.47 7.63 8.39 8.39 0 0 1-8.38 8.37v5.59h-5.58v-5.6a8.39 8.39 0 0 1-8.38-8.37h5.59a2.8 2.8 0 0 0 2.79 2.79h5.58a2.8 2.8 0 0 0 2.8-2.8c0-1.05-.76-1.94-1.8-2.11l-8.5-1.42a7.7 7.7 0 0 1-6.46-7.63 8.39 8.39 0 0 1 8.38-8.37V14.3h5.58v5.59a8.39 8.39 0 0 1 8.38 8.37h-5.59a2.8 2.8 0 0 0-2.79-2.8h-5.58a2.8 2.8 0 0 0-2.8 2.8Z"
      />
      <defs>
        {/* Updated gradient: top → bottom */}
        <linearGradient
          id="ab"
          x1="34"
          y1="0"
          x2="34"
          y2="68"
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