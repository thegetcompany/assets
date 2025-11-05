const fs = require("fs");
const path = require("path");

const inputDir = path.join(__dirname, "../src/assets/images");
const outputFile = path.join(__dirname, "../src/index.ts");

const VALID_NAME_REGEX = /^[A-Za-z_][A-Za-z0-9_]*$/;

function toPascalCase(str) {
  return str
    .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""))
    .replace(/^(.)/, (_, c) => c.toUpperCase());
}

async function getSvgFiles(dir, parentFolder = "") {
  let svgFiles = [];
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      const nestedFiles = await getSvgFiles(
        filePath,
        path.join(parentFolder, file)
      );
      svgFiles = svgFiles.concat(nestedFiles);
    } else if (path.extname(file) === ".svg") {
      svgFiles.push(path.join(parentFolder, file));
    }
  }

  return svgFiles;
}

async function writeIndexFile() {
  const svgFiles = await getSvgFiles(inputDir);
  const exportLines = [];
  const nameCount = {};

  for (const file of svgFiles) {
    const fileName = path.basename(file, ".svg");
    let exportName = toPascalCase(fileName);

    if (!VALID_NAME_REGEX.test(exportName)) {
      console.error(`❌ Invalid filename: "${fileName}.svg"`);
      console.error(
        "   → Gunakan hanya huruf, angka, atau underscore (tidak boleh mulai angka)."
      );
      process.exit(1);
    }

    if (nameCount[exportName]) {
      const folderPrefix = path
        .dirname(file)
        .split(path.sep)
        .map(toPascalCase)
        .join("");
      exportName = `${folderPrefix}${exportName}`;
      nameCount[exportName]++;
    } else {
      nameCount[exportName] = 1;
    }

    exportLines.push(
      `export { default as ${exportName} } from './assets/images/${file.replace(
        /\\/g,
        "/"
      )}';`
    );
  }

  const header = `// ⚠️ Auto-generated file. Do not edit manually.\n\n`;
  const footer = `export { countries } from './assets/data/countries.js';\n`;
  fs.writeFileSync(outputFile, header + exportLines.join("\n") + "\n\n" + footer, "utf-8");

  console.log(`✅ Index file successfully written to: ${outputFile}`);
}

writeIndexFile().catch((error) => {
  console.error("❌ Failed to generate index file:", error);
  process.exit(1);
});
