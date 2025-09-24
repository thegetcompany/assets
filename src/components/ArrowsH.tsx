
import * as React from "react";

interface ArrowsHProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const ArrowsH = ({
  width = 20,
  height = 20,
  color = "currentColor",
  ...props
}: ArrowsHProps) => (
  <svg
    viewBox="0 0 20 20"
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill={color || "currentColor"} d="M21.92,11.62a1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L18.59,11H5.41l2.3-2.29A1,1,0,1,0,6.29,7.29l-4,4a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l4,4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L5.41,13H18.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33A1,1,0,0,0,21.92,11.62Z"/>
  </svg>
);

export default ArrowsH;
