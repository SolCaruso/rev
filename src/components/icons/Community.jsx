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
          d="M58.528 5.589a8.392 8.392 0 0 0-6.809-1.882 7.88 7.88 0 0 0-2.73.994C47.501 2.364 44.905.804 41.937.804c-2.152 0-4.098.84-5.583 2.177-1.485-1.34-3.43-2.177-5.583-2.177-2.973 0-5.575 1.569-7.06 3.91-1.22-.692-2.608-1.119-4.107-1.119-4.617 0-8.375 3.758-8.375 8.375v7.641l-4.053 3.967a15 15 0 0 0-4.44 10.68c-.002 4.04 1.57 7.834 4.504 10.768L18.705 55.63c.572.528.9 1.276.9 2.052v7.328a2.79 2.79 0 1 0 5.582 0v-7.328a8.41 8.41 0 0 0-2.688-6.15l-11.39-10.527a9.452 9.452 0 0 1-2.789-6.74c0-2.543.994-4.935 2.78-6.714l6.287-6.155a2.795 2.795 0 0 1 3.945 0c.528.527.818 1.228.818 1.976a2.74 2.74 0 0 1-.804 1.957l-6.608 6.48a2.791 2.791 0 1 0 3.909 3.986l6.624-6.496a8.309 8.309 0 0 0 2.46-5.924c0-.29-.053-.572-.084-.857.966.391 2.015.617 3.12.617 2.153 0 4.1-.84 5.584-2.177 1.485 1.34 3.431 2.177 5.584 2.177 2.152 0 4.098-.84 5.583-2.177 1.485 1.34 3.43 2.177 5.583 2.177a8.4 8.4 0 0 0 2.792-.477V37.05c0 3.199-.837 6.35-2.423 9.128a24.03 24.03 0 0 0-3.16 11.898v6.935a2.79 2.79 0 1 0 5.583 0v-6.935c0-3.199.837-6.35 2.423-9.128a24.03 24.03 0 0 0 3.16-11.898V11.97a8.368 8.368 0 0 0-2.95-6.382h.002Zm-36.132 9.988c-1.793-.695-3.763-.726-5.584-.148v-3.462a2.796 2.796 0 0 1 2.792-2.791 2.796 2.796 0 0 1 2.792 2.791v3.61Zm11.166-.818a2.796 2.796 0 0 1-2.791 2.792 2.796 2.796 0 0 1-2.792-2.792V9.176a2.796 2.796 0 0 1 2.792-2.792 2.796 2.796 0 0 1 2.791 2.792v5.583Zm11.167 0a2.796 2.796 0 0 1-2.792 2.792 2.796 2.796 0 0 1-2.791-2.792V9.176a2.796 2.796 0 0 1 2.791-2.792 2.796 2.796 0 0 1 2.792 2.792v5.583Zm11.167 0a2.796 2.796 0 0 1-2.792 2.792 2.796 2.796 0 0 1-2.792-2.792l-.053-2.71a2.818 2.818 0 1 1 5.634-.056l.003 2.766Z"
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
          <path
            fill="#fff"
            transform="translate(.063 .804)"
            d="M0 0h67v67H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SVGComponent;