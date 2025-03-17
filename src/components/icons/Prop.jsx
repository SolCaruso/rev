import * as React from "react";

const SVGComponent = props => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g fill="inherit" stroke="none" strokeLinejoin="round" strokeWidth={4}>
      <path fill="inherit" d="M6 20h8v14H6zm14-6h8v26h-8z" />
      <path strokeLinecap="round" d="M24 44v-4" />
      <path fill="inherit" d="M34 12h8v9h-8z" />
      <path strokeLinecap="round" d="M10 20V10m28 24V21m0-9V4" />
    </g>
  </svg>
);

export default SVGComponent;