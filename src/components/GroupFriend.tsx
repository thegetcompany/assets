
import * as React from "react";

interface GroupFriendProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const GroupFriend = ({
  width = 20,
  height = 20,
  color = "currentColor",
  ...props
}: GroupFriendProps) => (
  <svg
    viewBox="0 0 20 20"
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12.9173 9.16667C12.9173 7.55583 11.6115 6.25 10.0007 6.25C8.38982 6.25 7.08398 7.55583 7.08398 9.16667C7.08398 10.7775 8.38982 12.0833 10.0007 12.0833C11.6115 12.0833 12.9173 10.7775 12.9173 9.16667Z" stroke={color || "currentColor"} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.9022 9.45825C13.1705 9.53958 13.4551 9.58333 13.7499 9.58333C15.3607 9.58333 16.6666 8.2775 16.6666 6.66667C16.6666 5.05583 15.3607 3.75 13.7499 3.75C12.2375 3.75 10.9939 4.90117 10.8477 6.37511" stroke={color || "currentColor"} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.1529 6.37511C9.00665 4.90117 7.76308 3.75 6.25065 3.75C4.63982 3.75 3.33398 5.05583 3.33398 6.66667C3.33398 8.2775 4.63982 9.58333 6.25065 9.58333C6.54549 9.58333 6.83011 9.53958 7.09838 9.45825" stroke={color || "currentColor"} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.3333 13.7487C18.3333 11.4475 16.2813 9.58203 13.75 9.58203" stroke={color || "currentColor"} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.5827 16.2487C14.5827 13.9475 12.5307 12.082 9.99935 12.082C7.46804 12.082 5.41602 13.9475 5.41602 16.2487" stroke={color || "currentColor"} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.24935 9.58203C3.71804 9.58203 1.66602 11.4475 1.66602 13.7487" stroke={color || "currentColor"} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default GroupFriend;
