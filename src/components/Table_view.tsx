
import * as React from "react";

interface Table_viewProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const Table_view = ({
  width = 20,
  height = 20,
  color = "currentColor",
  ...props
}: Table_viewProps) => (
  <svg
    viewBox="0 0 20 20"
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask id="mask0_19052_74609" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
<rect x="0.5" width="24" height="24" fill="current"/>
</mask>
<g mask="url(#mask0_19052_74609)">
<path d="M5.80775 20.5C5.30258 20.5 4.875 20.325 4.525 19.975C4.175 19.625 4 19.1974 4 18.6923V5.30775C4 4.80258 4.175 4.375 4.525 4.025C4.875 3.675 5.30258 3.5 5.80775 3.5H19.1923C19.6974 3.5 20.125 3.675 20.475 4.025C20.825 4.375 21 4.80258 21 5.30775V18.6923C21 19.1974 20.825 19.625 20.475 19.975C20.125 20.325 19.6974 20.5 19.1923 20.5H5.80775ZM11.75 14.702H5.5V18.6923C5.5 18.7821 5.52883 18.8558 5.5865 18.9135C5.64417 18.9712 5.71792 19 5.80775 19H11.75V14.702ZM13.25 14.702V19H19.1923C19.2821 19 19.3558 18.9712 19.4135 18.9135C19.4712 18.8558 19.5 18.7821 19.5 18.6923V14.702H13.25ZM11.75 13.202V8.8845H5.5V13.202H11.75ZM13.25 13.202H19.5V8.8845H13.25V13.202ZM5.5 7.38475H19.5V5.30775C19.5 5.21792 19.4712 5.14417 19.4135 5.0865C19.3558 5.02883 19.2821 5 19.1923 5H5.80775C5.71792 5 5.64417 5.02883 5.5865 5.0865C5.52883 5.14417 5.5 5.21792 5.5 5.30775V7.38475Z" fill={color || "currentColor"}/>
</g>
  </svg>
);

export default Table_view;
