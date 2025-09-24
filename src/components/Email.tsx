
import * as React from "react";

interface EmailProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const Email = ({
  width = 20,
  height = 20,
  color = "currentColor",
  ...props
}: EmailProps) => (
  <svg
    viewBox="0 0 20 20"
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M17.3337 2.49967C17.3337 1.58301 16.5837 0.833008 15.667 0.833008H2.33366C1.41699 0.833008 0.666992 1.58301 0.666992 2.49967V12.4997C0.666992 13.4163 1.41699 14.1663 2.33366 14.1663H15.667C16.5837 14.1663 17.3337 13.4163 17.3337 12.4997V2.49967ZM15.667 2.49967L9.00033 6.66634L2.33366 2.49967H15.667ZM15.667 12.4997H2.33366V4.16634L9.00033 8.33301L15.667 4.16634V12.4997Z" fill={color || "currentColor"}/>
  </svg>
);

export default Email;
