
import * as React from "react";

interface MoonProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const Moon = ({
  width = 20,
  height = 20,
  color = "currentColor",
  ...props
}: MoonProps) => (
  <svg
    viewBox="0 0 20 20"
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle style={{ fill: '#344E5D' }} cx="236.967" cy="236.967" r="236.967"/>
<path style={{ fill: '#F1EB75' }} d="M248.443,242.685c0-52.318,28.516-97.945,70.832-122.289c-15.757-6.601-33.055-10.26-51.21-10.26
	c-73.204,0-132.549,59.341-132.549,132.549c0,73.201,59.341,132.549,132.549,132.549c18.155,0,35.453-3.663,51.21-10.267
	C276.96,340.63,248.443,294.995,248.443,242.685z"/>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
  </svg>
);

export default Moon;
