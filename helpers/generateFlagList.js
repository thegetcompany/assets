import fs from "fs";
import path from "path";

const flagsDir = path.resolve("src/assets/images/flags");
const outputPath = path.resolve("src/assets/data/countriesList.json");

const files = fs
  .readdirSync(flagsDir)
  .filter((file) => /\.(svg|png|jpg|jpeg)$/i.test(file))
  .map((file) => path.basename(file, path.extname(file)));

fs.writeFileSync(outputPath, JSON.stringify(files, null, 2), "utf-8");

console.log(
  `✅ Successfully generated list with ${files.length} flags -> ${outputPath}`
);
