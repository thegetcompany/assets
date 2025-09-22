const fs = require("fs").promises;
const path = require("path");
const {transform} = require("@svgr/core");

const inputDir = path.join(__dirname, "../src/assets/icons");
const outputDir = path.join(__dirname, "../src/components");

const iconComponentTemplate = (variables, {componentName, jsx}) => `
import * as React from "react";

interface ${componentName}Props extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const ${componentName} = ({
  width = 20,
  height = 20,
  color = "currentColor",
  ...props
}: ${componentName}Props) => (
  <svg
    viewBox="0 0 20 20"
    width={width}
    height={height}
    {...props}
  >
    ${jsx}
  </svg>
);

export default ${componentName};
`;

function cleanSvgJsx(jsCode) {
  return jsCode
    .replace(/<path[^>]*>/g, (match) => {
      if (/mask=|clip-path=/.test(match)) return match;

      let newTag = match;

      const fillMatch = newTag.match(/fill="([^"]*)"/);
      const strokeMatch = newTag.match(/stroke="([^"]*)"/);

      const fillVal = fillMatch ? fillMatch[1] : null;
      const strokeVal = strokeMatch ? strokeMatch[1] : null;

      if (fillVal && !strokeVal) {
        if (fillVal !== "none") {
          newTag = newTag.replace(
            /fill="[^"]*"/,
            'fill={color || "currentColor"}'
          );
        }
      } else if (!fillVal && strokeVal) {
        if (strokeVal !== "none") {
          newTag = newTag.replace(
            /stroke="[^"]*"/,
            'stroke={color || "currentColor"}'
          );
        }
      } else if (fillVal && strokeVal) {
        if (fillVal === "none" && strokeVal !== "none") {
          newTag = newTag.replace(
            /stroke="[^"]*"/,
            'stroke={color || "currentColor"}'
          );
        } else if (strokeVal === "none" && fillVal !== "none") {
          newTag = newTag.replace(
            /fill="[^"]*"/,
            'fill={color || "currentColor"}'
          );
        } else if (fillVal === strokeVal) {
          newTag = newTag
            .replace(/fill="[^"]*"/, 'fill={color || "currentColor"}')
            .replace(/stroke="[^"]*"/, 'stroke={color || "currentColor"}');
        } else {
          newTag = newTag
            .replace(/stroke="[^"]*"/, 'stroke={color || "currentColor"}')
            .replace(/fill="[^"]*"/, 'fill="none"');
        }
      }

      return newTag;
    })
    .replace(/stroke-width=/g, "strokeWidth=")
    .replace(/stroke-linecap=/g, "strokeLinecap=")
    .replace(/stroke-linejoin=/g, "strokeLinejoin=")
    .replace(/fill-rule=/g, "fillRule=")
    .replace(/clip-rule=/g, "clipRule=")
    .replace(/clip-path=/g, "clipPath=")
}

async function generateIcons() {
  await fs.mkdir(outputDir, {recursive: true});
  const files = await fs.readdir(inputDir);
  for (const file of files) {
    if (path.extname(file) === ".svg") {
      const svgCode = await fs.readFile(path.join(inputDir, file), "utf-8");
      const componentName = path
        .basename(file, ".svg")
        .replace(/^[a-z]|-[a-z]/g, (match) =>
          match.replace("-", "").toUpperCase()
        );
      const jsCode = await transform(
        svgCode,
        {
          icon: true,
          typescript: true,
          native: true,
          exportType: "named",
        },
        {componentName}
      );

      const cleanedJsx = cleanSvgJsx(jsCode);

      const variables = "";
      const iconComponent = iconComponentTemplate(variables, {
        componentName,
        jsx: cleanedJsx,
      });
      await fs.writeFile(
        path.join(outputDir, `${componentName}.tsx`),
        iconComponent
      );
    }
  }
}

generateIcons().catch(console.error);
