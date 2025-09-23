
import * as React from "react";

interface SoloTravelerProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const SoloTraveler = ({
  width = 20,
  height = 20,
  color = "currentColor",
  ...props
}: SoloTravelerProps) => (
  <svg
    viewBox="0 0 20 20"
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M14.1673 7.08464C14.1673 4.78345 12.3018 2.91797 10.0007 2.91797C7.69947 2.91797 5.83398 4.78345 5.83398 7.08464C5.83398 9.3858 7.69947 11.2513 10.0007 11.2513C12.3018 11.2513 14.1673 9.3858 14.1673 7.08464Z" stroke={color || "currentColor"} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.8327 17.0833C15.8327 13.8617 13.221 11.25 9.99935 11.25C6.77769 11.25 4.16602 13.8617 4.16602 17.0833" stroke={color || "currentColor"} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default SoloTraveler;
