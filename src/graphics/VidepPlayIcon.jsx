import * as React from "react"
const SvgComponent = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        aria-hidden="true"
        className="titleCard-playSVG ltr-0 e1mhci4z1"
        data-name="Play"
        {...props}
    >
        <path
            fill="currentColor"
            d="M5 2.691a1 1 0 0 1 1.482-.876l16.925 9.309a1 1 0 0 1 0 1.752L6.482 22.185A1 1 0 0 1 5 21.309V2.69Z"
        />
    </svg>
)
export { SvgComponent as VideoPlayIcon }