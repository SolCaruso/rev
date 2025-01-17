import * as React from "react";

const SVGComponent = ({ className = "", ...props }) => {
  return (
    <svg
      viewBox="0 0 68 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <g clipPath="url(#ax)">
        <path
          fill="url(#bx)"
          d="M60.7 14.31c-.87 0-1.64-.47-2.02-1.25a7.8 7.8 0 0 0-7.02-4.33h-3.85V2.5A2.14 2.14 0 0 0 44.97.48a8.38 8.38 0 0 0-5.54 7.88v4.56l-2.7 7.92a2.8 2.8 0 0 1-2.61 1.85H19.88c-3.04 0-5.86 1-8.16 2.65-1.67-.77-5.79-3.18-5.79-8.24a2.8 2.8 0 0 0-5.58 0c0 6.9 4.45 10.7 7.5 12.5a13.86 13.86 0 0 0-1.92 7.06V59a8.38 8.38 0 0 0 16.75 0v-5.6h13.96v5.58a8.39 8.39 0 0 0 16.76 0v-7.72c0-1.17.13-2.34.37-3.48l2.96-13.94a11.18 11.18 0 0 0 10.62-11.16v-1.4a6.6 6.6 0 0 0-6.65-6.97Zm1.06 8.38c0 3.08-2.5 5.58-5.58 5.58a4.93 4.93 0 0 0-4.8 3.9L48.3 46.61a22.38 22.38 0 0 0-.49 4.64v7.72a2.8 2.8 0 0 1-5.6 0V50.6a2.8 2.8 0 0 0-2.78-2.8l-19.54.02a2.8 2.8 0 0 0-2.8 2.79V59a2.8 2.8 0 0 1-5.57 0V36.66a8.39 8.39 0 0 1 8.36-8.38h14.23a8.4 8.4 0 0 0 7.87-5.54l3.05-8.43h6.63c.86 0 1.63.48 2.02 1.25a7.8 7.8 0 0 0 7 4.34c1.08 0 1.08 1 1.08 1.4v1.39Z"
        />
      </g>
      <defs>
        {/* Updated gradient to top -> bottom */}
        <linearGradient
          id="bx"
          x1="34"
          y1="0"
          x2="34"
          y2="68"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#db2e20" />
          <stop offset={1} stopColor="#f20165" />
        </linearGradient>
        <clipPath id="ax">
          <path
            fill="#fff"
            d="M0 0h67v67H0z"
            transform="translate(.35 .35)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SVGComponent;