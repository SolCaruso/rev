import * as React from "react";

const SvgComponent = ({ strokeColor = "#fff", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 15 16"
    {...props}
  >
    <path
      stroke={strokeColor}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12.94 8.26H1.84m11.1 0-3.7-3.7m3.7 3.7-3.7 3.7"
    />
  </svg>
);

export default SvgComponent;
