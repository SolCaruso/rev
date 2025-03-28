import * as React from "react";

const SVGComponent = props => (
  <svg viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" {...props}>
    <path 
      fill="inherit" 
      stroke="none" 
      d="m15 14 2.045-1.533C19.469 10.648 20.542 6.98 20 4c-2.981-.542-6.649.531-8.467 2.955L10 9m5 5-3.5 2.5-4-4L10 9m5 5v2.667a4 4 0 0 1-.8 2.4l-.7.933-1-1M10 9H7.333a4 4 0 0 0-2.4.8L4 10.5l1 1M8.5 18 5 19l1.166-3.5m9.334-6a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
    />
  </svg>
);

export default SVGComponent;