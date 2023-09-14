import * as React from "react"
const SvgComponent = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        className="icon"
        {...props}
    >
        <path fill="#050505" d="M8 7h8v2H8zm0 4h5v2H8z" />
        <path
            fill="#050505"
            fillRule="evenodd"
            d="M18 4H6v16h12V4ZM4 2v20h16V2H4Z"
            clipRule="evenodd"
        />
    </svg>
)
export { SvgComponent as DocIcon }
