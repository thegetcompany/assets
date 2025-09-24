
import * as React from "react";

interface MountainIconProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const MountainIcon = ({
  width = 20,
  height = 20,
  color = "currentColor",
  ...props
}: MountainIconProps) => (
  <svg
    viewBox="0 0 20 20"
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M13.3327 16.6654H1.66602L4.35316 8.96178C5.66231 5.20861 6.31688 3.33203 7.49935 3.33203C8.61377 3.33203 9.25927 4.9987 10.4257 8.33203" stroke={color || "currentColor"} strokeWidth="1.25" strokeLinejoin="round"/>
<path d="M5 16.6667H18.3333L14.5055 10.5487C13.2338 8.51625 12.598 7.5 11.6667 7.5C10.7353 7.5 10.0995 8.51625 8.82783 10.5487L7.60698 12.5" stroke={color || "currentColor"} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default MountainIcon;
