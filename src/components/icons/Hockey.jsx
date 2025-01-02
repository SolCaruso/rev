import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className="pb-[2px]"
    {...props}
  >
    <path
      fill="#FF005B"
      d="M17.68 4H14.3l-1.74 4-.25.5c-.14.28-.25.54-.31.69L9.7 4H6.32l4.09 8.84.7 1.59c.39.85.67 1.48.89 1.92l1.41 3.09c.19.34.48.51.89.51L19 20v-4h-4l-1.4-3.16L17.68 4Zm2.35 12v4H22v-3c0-.27-.09-.5-.28-.72A.92.92 0 0 0 21 16h-.97ZM5 16v4l4.7-.05c.41 0 .7-.17.89-.51l.85-1.94-1.6-3.44L9 16H5Zm-3 4h1.97v-4H3c-.3 0-.53.08-.72.28-.19.22-.28.45-.28.72v3Z"
    />
  </svg>
)
export default SvgComponent
