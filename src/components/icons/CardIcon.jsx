import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 54 54"
    {...props}
  >
    <g filter="url(#a)">
      <rect
        width={45.59}
        height={45.47}
        x={3.98}
        y={3.31}
        fill="#fff"
        fillOpacity={0.01}
        rx={10}
        shapeRendering="crispEdges"
      />
    </g>
    <g filter="url(#b)">
      <rect
        width={42.39}
        height={42.39}
        x={5.58}
        y={4.85}
        fill="url(#c)"
        rx={10}
      />
    </g>
    <rect
      width={37.72}
      height={37.72}
      x={7.92}
      y={7.18}
      stroke="#A1B5A0"
      strokeWidth={0.75}
      rx={7.63}
    />
    <defs>
      <filter
        id="a"
        width={52.79}
        height={52.67}
        x={0.38}
        y={0.71}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={1} />
        <feGaussianBlur stdDeviation={1.8} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.33 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_266_22594"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_266_22594"
          result="shape"
        />
      </filter>
      <filter
        id="b"
        width={42.39}
        height={46.39}
        x={5.58}
        y={4.85}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={4} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" />
        <feBlend in2="shape" result="effect1_innerShadow_266_22594" />
      </filter>
      <linearGradient
        id="c"
        x1={43.85}
        x2={9.4}
        y1={4.85}
        y2={44.97}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#272926" />
        <stop offset={1} stopColor="#201F1E" />
      </linearGradient>
    </defs>
  </svg>
)
export default SvgComponent
