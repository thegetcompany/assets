
import * as React from "react";

interface KidIconProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const KidIcon = ({
  width = 20,
  height = 20,
  color = "currentColor",
  ...props
}: KidIconProps) => (
  <svg
    viewBox="0 0 20 20"
    width={width}
    height={height}
    {...props}
  >
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.99935 18.3346C14.6017 18.3346 18.3327 14.6037 18.3327 10.0013C18.3327 5.39893 14.6017 1.66797 9.99935 1.66797C5.39698 1.66797 1.66602 5.39893 1.66602 10.0013C1.66602 14.6037 5.39698 18.3346 9.99935 18.3346Z" fill="none" stroke={color || "currentColor"} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.666 4.78289C11.666 4.78289 10.7368 5.1997 10.0841 4.88173C9.28801 4.49395 8.49859 2.87313 10.0755 1.66797" stroke={color || "currentColor"} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.67349 7.5H6.66602M13.3327 7.5H13.3252" stroke={color || "currentColor"} strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.66602 12.5C7.42612 13.512 8.63627 14.1667 9.99935 14.1667C11.3624 14.1667 12.5726 13.512 13.3327 12.5" stroke={color || "currentColor"} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  </svg>
);

export default KidIcon;
