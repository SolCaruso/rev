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
      <g clipPath="url(#art)">
        <path
          fill="url(#bill)"
          d="M20.06 14.2c2.34 0 4.45.97 5.97 2.52a13.95 13.95 0 0 0-5.87 14.23h-.1a8.37 8.37 0 1 1 0-16.74ZM47.8 28.28c0 .95-.1 1.87-.28 2.76.1 0 .19.03.28.03a8.37 8.37 0 1 0-5.98-14.22 13.93 13.93 0 0 1 5.98 11.43Zm-13.96 8.38a8.37 8.37 0 1 0 0-16.75 8.37 8.37 0 0 0 0 16.75ZM5.94 58.98V47.8H.35v11.17a8.39 8.39 0 0 0 8.38 8.37h11.16v-5.58H8.73a2.8 2.8 0 0 1-2.8-2.8Zm55.83 0a2.8 2.8 0 0 1-2.8 2.8H47.82v5.57h11.17a8.39 8.39 0 0 0 8.37-8.37V47.8h-5.58v11.17ZM58.97.35H47.82v5.59h11.17a2.8 2.8 0 0 1 2.79 2.79V19.9h5.58V8.73A8.39 8.39 0 0 0 58.98.35ZM5.95 8.73a2.8 2.8 0 0 1 2.79-2.8H19.9V.36H8.73A8.39 8.39 0 0 0 .35 8.73V19.9h5.59V8.73Zm32.1 33.5h-8.37a6.99 6.99 0 0 0-6.98 6.98v4.19h5.58v-4.2c0-.76.63-1.39 1.4-1.39h8.37c.77 0 1.4.63 1.4 1.4v4.19h5.58v-4.2a6.99 6.99 0 0 0-6.98-6.97Zm-13.96-5.58h-8.37a6.99 6.99 0 0 0-6.98 6.97v4.2h5.58v-4.2c0-.76.63-1.4 1.4-1.4h3.52a12.58 12.58 0 0 1 7.26-5.12 6.92 6.92 0 0 0-2.4-.45ZM52 42.23c.77 0 1.4.63 1.4 1.4v4.18h5.58v-4.19A6.99 6.99 0 0 0 52 36.65h-8.38c-.85 0-1.65.17-2.4.45 3 .79 5.57 2.62 7.26 5.13H52Z"
        />
      </g>
      <defs>
        {/* Updated gradient: top -> bottom */}
        <linearGradient
          id="bill"
          x1="34"
          y1="0"
          x2="34"
          y2="68"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#db2e20" />
          <stop offset={1} stopColor="#f20165" />
        </linearGradient>
        <clipPath id="art">
          <path fill="#fff" d="M0 0h67v67H0z" transform="translate(.35 .35)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SVGComponent;