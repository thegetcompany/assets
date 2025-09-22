
import * as React from "react";

interface ArrowRightProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const ArrowRight = ({
  width = 20,
  height = 20,
  color = "currentColor",
  ...props
}: ArrowRightProps) => (
  <svg
    viewBox="0 0 20 20"
    width={width}
    height={height}
    {...props}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12H19" stroke={color || "currentColor"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 5L19 12L12 19" stroke={color || "currentColor"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  </svg>
);

export default ArrowRight;
