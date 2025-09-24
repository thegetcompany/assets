
import * as React from "react";

interface LeftArrowFromLeftProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const LeftArrowFromLeft = ({
  width = 20,
  height = 20,
  color = "currentColor",
  ...props
}: LeftArrowFromLeftProps) => (
  <svg
    viewBox="0 0 20 20"
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill={color || "currentColor"} d="M17,11H5.41l2.3-2.29A1,1,0,1,0,6.29,7.29l-4,4a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l4,4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L5.41,13H17a1,1,0,0,0,0-2Zm4-7a1,1,0,0,0-1,1V19a1,1,0,0,0,2,0V5A1,1,0,0,0,21,4Z"/>
  </svg>
);

export default LeftArrowFromLeft;
