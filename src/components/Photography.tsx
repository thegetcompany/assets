
import * as React from "react";

interface PhotographyProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const Photography = ({
  width = 20,
  height = 20,
  color = "currentColor",
  ...props
}: PhotographyProps) => (
  <svg
    viewBox="0 0 20 20"
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M7 6.00055C5.77936 6.00421 5.10383 6.03341 4.54873 6.2664C3.7712 6.59275 3.13801 7.19558 2.76811 7.96165C2.46618 8.58693 2.41678 9.38805 2.31796 10.9903L2.16312 13.501C1.91739 17.4854 1.79452 19.4776 2.96369 20.7388C4.13285 22 6.10253 22 10.0419 22H13.9581C17.8975 22 19.8671 22 21.0363 20.7388C22.2055 19.4776 22.0826 17.4854 21.8369 13.501L21.682 10.9903C21.5832 9.38805 21.5338 8.58693 21.2319 7.96165C20.862 7.19558 20.2288 6.59275 19.4513 6.2664C18.8962 6.03341 18.2206 6.00421 17 6.00055" stroke={color || "currentColor"} strokeWidth="1.5" strokeLinecap="round"/> 
<path d="M17 7L16.1142 4.78543C15.732 3.82996 15.3994 2.7461 14.4166 2.25955C13.8924 2 13.2616 2 12 2C10.7384 2 10.1076 2 9.58335 2.25955C8.6006 2.7461 8.26801 3.82996 7.88583 4.78543L7 7" stroke={color || "currentColor"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.5 14C15.5 15.933 13.933 17.5 12 17.5C10.067 17.5 8.5 15.933 8.5 14C8.5 12.067 10.067 10.5 12 10.5C13.933 10.5 15.5 12.067 15.5 14Z" stroke={color || "currentColor"} strokeWidth="1.5"/>
<path d="M12 6H12.009" stroke={color || "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default Photography;
