import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className="pb-[2px] pt-[1px]"
    {...props}
  >
    <path
      fill="#FCD263"
      d="M18 2a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h12Zm-1 13a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-5-5a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM7 5a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
    />
  </svg>
)
export default SvgComponent