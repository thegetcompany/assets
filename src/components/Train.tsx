
import * as React from "react";

interface TrainProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const Train = ({
  width = 20,
  height = 20,
  color = "currentColor",
  ...props
}: TrainProps) => (
  <svg
    viewBox="0 0 20 20"
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M9.5 22H14.5" stroke={color || "currentColor"} strokeWidth="1.35" strokeLinecap="round"/>
<path fillRule="evenodd" clipRule="evenodd" d="M7 2C5.34315 2 4 3.34315 4 5V13.6C4 13.8209 4.17909 14 4.4 14H19.6C19.8209 14 20 13.8209 20 13.6V5C20 3.34315 18.6569 2 17 2H7ZM9.5 4.25C9.08579 4.25 8.75 4.58579 8.75 5C8.75 5.41421 9.08579 5.75 9.5 5.75H14.5C14.9142 5.75 15.25 5.41421 15.25 5C15.25 4.58579 14.9142 4.25 14.5 4.25H9.5Z" fill={color || "currentColor"}/>
<path fillRule="evenodd" clipRule="evenodd" d="M4 15.4C4 15.1791 4.17909 15 4.4 15H19.6C19.8209 15 20 15.1791 20 15.4V17.2C20 18.5588 19.0321 19.6916 17.7481 19.9464C17.7494 19.9641 17.75 19.982 17.75 20V21C17.75 21.4142 17.4142 21.75 17 21.75C16.5858 21.75 16.25 21.4142 16.25 21V20H7.75V21C7.75 21.4142 7.41421 21.75 7 21.75C6.58579 21.75 6.25 21.4142 6.25 21V20C6.25 19.982 6.25064 19.9641 6.25189 19.9464C4.96792 19.6916 4 18.5588 4 17.2V15.4ZM9.25 17.25C9.25 17.9404 8.69036 18.5 8 18.5C7.30964 18.5 6.75 17.9404 6.75 17.25C6.75 16.5596 7.30964 16 8 16C8.69036 16 9.25 16.5596 9.25 17.25ZM16.25 18.5C16.9404 18.5 17.5 17.9404 17.5 17.25C17.5 16.5596 16.9404 16 16.25 16C15.5596 16 15 16.5596 15 17.25C15 17.9404 15.5596 18.5 16.25 18.5Z" fill={color || "currentColor"}/>
  </svg>
);

export default Train;
