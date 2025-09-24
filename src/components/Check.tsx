
import * as React from "react";

interface CheckProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const Check = ({
  width = 20,
  height = 20,
  color = "currentColor",
  ...props
}: CheckProps) => (
  <svg
    viewBox="0 0 20 20"
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M10.5 3L5 8.5L2.5 6" stroke={color || "currentColor"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default Check;
