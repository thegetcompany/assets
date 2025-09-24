
import * as React from "react";

interface IconAngleRightProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const IconAngleRight = ({
  width = 20,
  height = 20,
  color = "currentColor",
  ...props
}: IconAngleRightProps) => (
  <svg
    viewBox="0 0 20 20"
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>Asset 2octa</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><rect className="cls-1" width="34.33" height="34.33"/><g id="Layer_2-2" data-name="Layer 2"><g id="Layer_1-2-2" data-name="Layer 1-2"><polyline className="cls-2" points="11.02 5.09 23.32 16.95 11.45 29.25"/></g></g></g></g>
  </svg>
);

export default IconAngleRight;
