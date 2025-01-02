import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#FCD263"
      d="M12 2C9 7 4 9 4 14c0 2 2 4 4 4 1 0 2 0 3-1 0 0 .32 2-2 5h6c-2-3-2-5-2-5 1 1 2 1 3 1 2 0 4-2 4-4 0-5-5-7-8-12Z"
    />
  </svg>
)
export default SvgComponent