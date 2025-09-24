const fs = require("fs").promises;
const path = require("path");
const {transform} = require("@svgr/core");
const sharp = require("sharp");

const inputDir = path.join(__dirname, "../src/assets/icons");
const outputDir = path.join(__dirname, "../src/components");
const outputDirNative = path.join(__dirname, "../src/native-components");
const outputDirPng = path.join(__dirname, "../src/assets/images/pngFromSvg");

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
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    ${jsx}
  </svg>
);

export default ${componentName};
`;

function cleanSvgJsx(jsCode) {
  const inner = jsCode.match(/<svg[^>]*>([\s\S]*?)<\/svg>/);
  let cleaned = inner ? inner[1] : jsCode;

  cleaned = cleaned
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
    .replace(/clip-path=/g, "clipPath=");
  return cleaned.trim();
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

// For RN
function cleanSvgForPng(svgCode) {
  let cleaned = svgCode;

  cleaned = cleaned.replace(/<path[^>]*>/g, (match) => {
    if (/mask=|clip-path=/.test(match)) return match;

    let newTag = match;

    const fillMatch = newTag.match(/fill="([^"]*)"/);
    const strokeMatch = newTag.match(/stroke="([^"]*)"/);

    const fillVal = fillMatch ? fillMatch[1] : null;
    const strokeVal = strokeMatch ? strokeMatch[1] : null;

    // if (fillVal && !strokeVal) {
    //   if (fillVal !== "none") {
    //     newTag = newTag.replace(
    //       /fill="[^"]*"/,
    //       'fill="#000000"'
    //     );
    //   }
    // } else if (!fillVal && strokeVal) {
    //   if (strokeVal !== "none") {
    //     newTag = newTag.replace(
    //       /stroke="[^"]*"/,
    //       'stroke="#000000"'
    //     );
    //   }
    // } else if (fillVal && strokeVal) {
    //   if (fillVal === "none" && strokeVal !== "none") {
    //     newTag = newTag.replace(
    //       /stroke="[^"]*"/,
    //       'stroke="#000000"'
    //     );
    //   } else if (strokeVal === "none" && fillVal !== "none") {
    //     newTag = newTag.replace(
    //       /fill="[^"]*"/,
    //       'fill="#000000"'
    //     );
    //   } else if (fillVal === strokeVal) {
    //     newTag = newTag
    //       .replace(/fill="[^"]*"/, 'fill="#000000"')
    //       .replace(/stroke="[^"]*"/, 'stroke="#000000"');
    //   } else {
    //     newTag = newTag
    //       .replace(/stroke="[^"]*"/, 'stroke="#000000"')
    //       .replace(/fill="[^"]*"/, 'fill="none"');
    //   }
    // }
    return newTag;
  });

  return cleaned.trim();
}

async function generateIconsPng() {
  await fs.mkdir(outputDirPng, {recursive: true});
  const files = await fs.readdir(inputDir);

  for (const file of files) {
    if (path.extname(file) !== ".svg") continue;

    const svgCode = await fs.readFile(path.join(inputDir, file), "utf-8");

    const cleanedSvg = cleanSvgForPng(svgCode);

    const pngBuffer = await sharp(Buffer.from(cleanedSvg))
      .resize(200, 200, {fit: "contain", background: {r: 0, g: 0, b: 0, alpha: 1}})
      .png()
      .toBuffer();

    const outputFile = path.join(outputDirPng, file.replace(".svg", "_icon.png"));
    await fs.writeFile(outputFile, pngBuffer);
    console.log(`Generated PNG: ${outputFile}`);
  }

  console.log("All SVGs converted to PNG.");
}

generateIcons().catch(console.error);
generateIconsPng().catch(console.error);
