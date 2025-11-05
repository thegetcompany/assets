const fs = require("fs");
const path = require("path");
const {pathToFileURL} = require("url");

const scriptsDir = __dirname;

fs.readdir(scriptsDir, async (err, files) => {
  if (err) {
    console.error("❌ Error reading scripts directory:", err);
    return;
  }

  const jsFiles = files.filter((f) => f.endsWith(".js") && f !== "index.js");

  // Sort files to run those starting with "generate" first
  const sortedFiles = jsFiles.sort((a, b) => {
    const aIsGenerate = a.toLowerCase().startsWith("generate");
    const bIsGenerate = b.toLowerCase().startsWith("generate");
    if (aIsGenerate && !bIsGenerate) return -1;
    if (!aIsGenerate && bIsGenerate) return 1;
    return a.localeCompare(b);
  });

  for (const file of sortedFiles) {
    const filePath = path.join(scriptsDir, file);
    const fileUrl = pathToFileURL(filePath);
    console.log(`▶ Running: ${file}`);
    await import(fileUrl.href);
  }

  console.log("✅ All scripts executed successfully!");
});
