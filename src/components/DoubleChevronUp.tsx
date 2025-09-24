
import * as React from "react";

interface DoubleChevronUpProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const DoubleChevronUp = ({
  width = 20,
  height = 20,
  color = "currentColor",
  ...props
}: DoubleChevronUpProps) => (
  <svg
    viewBox="0 0 20 20"
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M1 5L5 1L9 5" stroke={color || "currentColor"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1 7.5L5 3.5L9 7.5" stroke={color || "currentColor"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default DoubleChevronUp;
