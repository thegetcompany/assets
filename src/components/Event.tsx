
import * as React from "react";

interface EventProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const Event = ({
  width = 20,
  height = 20,
  color = "currentColor",
  ...props
}: EventProps) => (
  <svg
    viewBox="0 0 20 20"
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M17 22H7C6.59 22 6.25 21.66 6.25 21.25C6.25 20.84 6.59 20.5 7 20.5H17C17.41 20.5 17.75 20.84 17.75 21.25C17.75 21.66 17.41 22 17 22Z" fill={color || "currentColor"}/>
<path d="M20.35 5.52001L16.35 8.38001C15.82 8.76001 15.06 8.53001 14.83 7.92001L12.94 2.88001C12.62 2.01001 11.39 2.01001 11.07 2.88001L9.16998 7.91001C8.93998 8.53001 8.18997 8.76001 7.65998 8.37001L3.65998 5.51001C2.85998 4.95001 1.79998 5.74001 2.12998 6.67001L6.28998 18.32C6.42998 18.72 6.80998 18.98 7.22998 18.98H16.76C17.18 18.98 17.56 18.71 17.7 18.32L21.86 6.67001C22.2 5.74001 21.14 4.95001 20.35 5.52001ZM14.5 14.75H9.49998C9.08998 14.75 8.74998 14.41 8.74998 14C8.74998 13.59 9.08998 13.25 9.49998 13.25H14.5C14.91 13.25 15.25 13.59 15.25 14C15.25 14.41 14.91 14.75 14.5 14.75Z" fill={color || "currentColor"}/>
  </svg>
);

export default Event;
