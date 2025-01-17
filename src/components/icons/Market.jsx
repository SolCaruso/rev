import * as React from "react";

const SVGComponent = ({ className = "", ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 58 58"
      className={className}
      {...props}
    >
      <path
        fill="url(#av)"
        d="M57.8 24.03c0-.18-.02-.35-.06-.52L54.62 9.4A11.94 11.94 0 0 0 42.88 0H15.05A11.94 11.94 0 0 0 3.32 9.4L.2 23.5a2.4 2.4 0 0 0-.06.53v2.4c0 2.34.85 4.6 2.4 6.35v12.87a12.03 12.03 0 0 0 12.02 12.02h28.83A12.03 12.03 0 0 0 55.4 45.65V32.78a9.57 9.57 0 0 0 2.4-6.35v-2.4Zm-52.86.26L8 10.45a7.17 7.17 0 0 1 7.04-5.64h1.9V12a2.4 2.4 0 1 0 4.8 0V4.8h14.42V12a2.4 2.4 0 0 0 4.8 0V4.8h1.91a7.17 7.17 0 0 1 7.04 5.64l3.07 13.84v2.14a4.8 4.8 0 0 1-4.8 4.8h-2.4a4.8 4.8 0 0 1-4.81-4.8 2.4 2.4 0 1 0-4.8 0 4.8 4.8 0 0 1-4.81 4.8h-4.8a4.8 4.8 0 0 1-4.81-4.8 2.4 2.4 0 1 0-4.8 0 4.8 4.8 0 0 1-4.82 4.8h-2.4a4.8 4.8 0 0 1-4.8-4.8V24.3Zm38.44 28.57H14.55a7.2 7.2 0 0 1-7.21-7.2v-9.92c.78.2 1.6.3 2.4.3h2.4a9.59 9.59 0 0 0 7.21-3.26 9.59 9.59 0 0 0 7.21 3.26h4.8a9.59 9.59 0 0 0 7.22-3.26 9.59 9.59 0 0 0 7.2 3.26h2.4c.82 0 1.63-.1 2.41-.3v9.91a7.2 7.2 0 0 1-7.2 7.21Z"
      />
      <defs>
        {/* Updated gradient: top → bottom */}
        <linearGradient
          id="av"
          x1="29"
          y1="0"
          x2="29"
          y2="58"
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