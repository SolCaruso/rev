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
      {/* Keep the black background */}
      <rect
        x={0.025}
        y={0.825}
        width={63.632}
        height={63.632}
        rx={31.816}
        fill="#1D1C20"
      />
      {/* Apply top-to-bottom gradient to just the path */}
      <path
        d="M39.363 21.07h-.579v-.579a1.735 1.735 0 1 0-3.471 0v.579H28.37v-.579a1.736 1.736 0 1 0-3.471 0v.579h-.579a6.372 6.372 0 0 0-6.364 6.364v12.728a6.372 6.372 0 0 0 6.364 6.364h15.043a6.371 6.371 0 0 0 6.364-6.364V27.434a6.371 6.371 0 0 0-6.364-6.364Zm0 21.985H24.32a2.896 2.896 0 0 1-2.892-2.893V29.17h20.827v10.992a2.896 2.896 0 0 1-2.892 2.893Zm-9.836-9.836v2.315c0 .958-.777 1.735-1.735 1.735h-2.314a1.736 1.736 0 0 1-1.736-1.735v-2.315c0-.958.777-1.735 1.736-1.735h2.314c.958 0 1.735.777 1.735 1.735Z"
        fill="url(#paint0_linear_559_2036)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_559_2036"
          // Top-to-bottom gradient
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