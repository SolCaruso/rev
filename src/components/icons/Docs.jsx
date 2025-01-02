import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 15"
    {...props}
  >
    <g clipPath="url(#a)">
      <mask
        id="b"
        width={11}
        height={14}
        x={3}
        y={1}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <g strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.19}>
          <path
            fill="#fff"
            stroke="#fff"
            d="M12.58 1.87H4.24a.6.6 0 0 0-.6.6v10.71a.6.6 0 0 0 .6.6h8.34a.6.6 0 0 0 .6-.6V2.46a.6.6 0 0 0-.6-.6Z"
          />
          <path stroke="#000" d="M6.03 9.61h4.17M6.03 11.4H8.1" />
          <path fill="#fff" stroke="#000" d="M6.03 4.25h4.17v2.98H6.03V4.25Z" />
        </g>
      </mask>
      <g mask="url(#b)">
        <path fill="#000" d="M.96.68h14.3v14.3H.96V.67Z" />
      </g>
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.96.68h14.29v14.29H.96z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgComponent
