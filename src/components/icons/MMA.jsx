import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 25 25"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#A5B8A4"
        d="M19.52 16.58V7.75h2.7v8.83h-2.7Zm-6.3-10.6H8.7s-4.5 0-4.5 3.53v5.3c0 1.57.9 2.44 1.86 2.93.14-.82.58-1.56 1.22-2.1a3.65 3.65 0 0 1 2.32-.83h2.7v1.77H9.6c-.48 0-.94.19-1.28.52a1.75 1.75 0 0 0 0 2.5c.34.33.8.51 1.28.51h4.5c3.61 0 3.61-3.53 3.61-3.53V7.75s-.9-1.77-4.5-1.77Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.69.15h24v24h-24z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgComponent