
import * as React from "react";

interface ChevronUpProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const ChevronUp = ({
  width = 20,
  height = 20,
  color = "currentColor",
  ...props
}: ChevronUpProps) => (
  <svg
    viewBox="0 0 20 20"
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M1 5L5 1L9 5" stroke={color || "currentColor"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default ChevronUp;
