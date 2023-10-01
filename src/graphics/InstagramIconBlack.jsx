import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      fillRule="evenodd"
      d="M5.807 5.136C3.462 7.122 2 9.996 2 13.615v2.979c0 4.985 1.519 8.244 3.822 10.273 2.315 2.038 5.573 2.968 9.314 2.977H16.185c3.765 0 7.044-.928 9.37-2.971 2.304-2.022 3.822-5.266 3.822-10.221v-2.979c0-3.618-1.462-6.493-3.808-8.479-2.361-1.999-5.669-3.136-9.384-3.136H14.84v-.055c-3.572.07-6.747 1.197-9.034 3.133ZM4.5 28.368c2.732 2.405 6.412 3.417 10.341 3.473v.003h1.344c4.061 0 7.878-1 10.69-3.468 2.836-2.49 4.502-6.341 4.502-11.724v-2.979c0-4.207-1.722-7.64-4.515-10.005-2.778-2.352-6.567-3.61-10.677-3.61H15.192V0c-4.11 0-7.899 1.258-10.677 3.61C1.721 5.975 0 9.407 0 13.615v2.979c0 5.41 1.664 9.276 4.5 11.774ZM20.856 10.52a3.185 3.185 0 0 1 1.051 2.16c.117.993.234 5.724-.058 6.834-.41 1.401-1.344 2.277-2.804 2.511-1.11.175-6.015.175-7.008-.058-1.46-.35-2.336-1.285-2.57-2.745-.175-1.052-.233-6.074.059-7.126.409-1.401 1.343-2.219 2.745-2.452 1.284-.234 4.789-.176 6.249-.059.876.059 1.693.292 2.336.935Zm-2.161 10.395c1.168-.116 1.869-.817 2.044-1.927.175-1.11.175-5.14.058-6.25-.116-1.167-.817-1.868-1.927-2.043-1.11-.117-5.14-.117-6.249 0-1.11.117-1.81.817-1.986 1.927-.175 1.168-.117 5.548 0 6.424.117.935.643 1.519 1.519 1.753.934.291 5.548.233 6.54.116Zm-6.308-5.08c0-1.811 1.46-3.271 3.271-3.271 1.81 0 3.27 1.46 3.27 3.27s-1.46 3.27-3.27 3.27-3.27-1.46-3.27-3.27Zm1.168 0c0 1.167.935 2.102 2.103 2.102a2.094 2.094 0 0 0 2.103-2.103 2.094 2.094 0 0 0-2.103-2.102 2.094 2.094 0 0 0-2.102 2.102Zm5.49-2.629c.41 0 .76-.35.76-.76 0-.408-.292-.758-.76-.758-.409 0-.759.35-.759.759 0 .409.35.76.76.76Z"
      clipRule="evenodd"
    />
  </svg>
)
export { SvgComponent as InstagramIconBlack }
