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
      <g clipPath="url(#ac)">
        <path
          fill="url(#bc)"
          d="M60.7 19.9h5.75c1.65-6.69.9-12.4-2.67-15.97-8.24-8.23-27.83-1.53-44.6 15.25-.71.7-1.38 1.42-2.05 2.14l1.69 6.47a83.06 83.06 0 0 1 4.3-4.67C34.6 11.65 46.62 5.97 54.08 5.97c2.5 0 4.47.63 5.75 1.9 2.2 2.22 2.5 6.56.87 12.03Z"
        />
        <path
          fill="url(#cc)"
          d="m55.28 25.48-3.29-12.56h-2.7l-3.3 12.56H33.86v2.57l9.28 5.16-3.64 11.38 2.01 1.52 9.14-7.07 9.1 7.04 2.1-1.46-3.7-11.25 9.21-5.33v-2.56H55.28Z"
        />
        <path
          fill="url(#dc)"
          d="M50.6 57.58a4.19 4.19 0 1 1 8.38 0 4.19 4.19 0 0 1-8.38 0Z"
        />
        <path
          fill="url(#ec)"
          d="M.35 12.92a4.19 4.19 0 1 1 8.38 0 4.19 4.19 0 0 1-8.38 0Z"
        />
        <path
          fill="url(#fc)"
          d="M14.31 4.54a4.19 4.19 0 1 1 8.38 0 4.19 4.19 0 0 1-8.38 0Z"
        />
        <path
          fill="url(#gc)"
          d="m14.76 33.4 7.93 2.32v1.8l-7.92 2.35-2.32 7.94h-1.81l-2.35-7.93-7.94-2.36v-1.8L8.3 33.4l2.35-7.92h1.8l2.32 7.92Z"
        />
        <path
          fill="url(#hc)"
          d="M19.9 60.68c5.29-1.58 11.63-4.97 18.1-10.2l4.58 3.47c-7.76 6.47-15.75 10.77-22.69 12.5-6.68 1.64-12.46.96-16.03-2.6C-.38 59.6-.62 52.3 2.42 43.94l1.38.42 2.28 7.71c-.08.71-.18 1.43-.18 2.07 0 2.5.64 4.48 1.91 5.75 2.21 2.2 6.62 2.42 12.08.78Z"
        />
      </g>
      <defs>
        {/* Updated gradient: top -> bottom for each id */}
        <linearGradient
          id="bc"
          x1="34"
          y1="0"
          x2="34"
          y2="68"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#db2e20" />
          <stop offset={1} stopColor="#f20165" />
        </linearGradient>
        <linearGradient
          id="cc"
          x1="34"
          y1="0"
          x2="34"
          y2="68"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#db2e20" />
          <stop offset={1} stopColor="#f20165" />
        </linearGradient>
        <linearGradient
          id="dc"
          x1="34"
          y1="0"
          x2="34"
          y2="68"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#db2e20" />
          <stop offset={1} stopColor="#f20165" />
        </linearGradient>
        <linearGradient
          id="ec"
          x1="34"
          y1="0"
          x2="34"
          y2="68"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#db2e20" />
          <stop offset={1} stopColor="#f20165" />
        </linearGradient>
        <linearGradient
          id="fc"
          x1="34"
          y1="0"
          x2="34"
          y2="68"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#db2e20" />
          <stop offset={1} stopColor="#f20165" />
        </linearGradient>
        <linearGradient
          id="gc"
          x1="34"
          y1="0"
          x2="34"
          y2="68"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#db2e20" />
          <stop offset={1} stopColor="#f20165" />
        </linearGradient>
        <linearGradient
          id="hc"
          x1="34"
          y1="0"
          x2="34"
          y2="68"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#db2e20" />
          <stop offset={1} stopColor="#f20165" />
        </linearGradient>
        <clipPath id="ac">
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