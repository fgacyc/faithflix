import React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    aria-hidden="true"
    className="search-icon ltr-0 e1mhci4z1"
    data-name="MagnifyingGlass"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-1.382 7.032a9 9 0 1 1 1.414-1.414l5.675 5.675-1.414 1.414-5.675-5.675Z"
      clipRule="evenodd"
    />
  </svg>
)
export { SvgComponent as SearchIcon }
