
import * as React from "react";

interface ParagraphProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const Paragraph = ({
  width = 20,
  height = 20,
  color = "currentColor",
  ...props
}: ParagraphProps) => (
  <svg
    viewBox="0 0 20 20"
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill={color || "currentColor"} d="M13,13.5H3a1,1,0,0,0,0,2H13a1,1,0,0,0,0-2Zm8-5H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"/>
  </svg>
);

export default Paragraph;
