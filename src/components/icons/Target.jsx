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
      <g clipPath="url(#a)">
        <path
          d="M34.32 20.345c-7.696 0-13.958 6.262-13.958 13.959 0 7.696 6.262 13.958 13.958 13.958 7.697 0 13.959-6.262 13.959-13.958 0-7.697-6.262-13.959-13.959-13.959Zm0 22.334c-4.617 0-8.375-3.758-8.375-8.375 0-4.618 3.758-8.375 8.375-8.375 4.618 0 8.375 3.757 8.375 8.375 0 4.617-3.757 8.375-8.375 8.375ZM65.03 31.512h-2.932C60.782 18.344 50.28 7.839 37.112 6.527V3.595a2.79 2.79 0 1 0-5.583 0v2.932C18.36 7.839 7.855 18.344 6.543 31.512H3.612a2.79 2.79 0 1 0 0 5.583h2.931C7.858 50.264 18.36 60.77 31.53 62.081v2.93a2.79 2.79 0 1 0 5.583 0v-2.93c13.168-1.315 23.673-11.818 24.985-24.986h2.932a2.79 2.79 0 1 0 0-5.583ZM34.32 56.637c-12.314 0-22.333-10.02-22.333-22.333 0-12.315 10.02-22.334 22.333-22.334 12.314 0 22.334 10.02 22.334 22.334S46.634 56.637 34.32 56.637Z"
          fill="url(#b)"
        />
      </g>
      <defs>
        {/* Updated gradient: top -> bottom */}
        <linearGradient
          id="b"
          x1="34"
          y1="0"
          x2="34"
          y2="68"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#db2e20" />
          <stop offset={1} stopColor="#f20165" />
        </linearGradient>
        <clipPath id="a">
          <path fill="#fff" transform="translate(.82 .804)" d="M0 0h67v67H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SVGComponent;