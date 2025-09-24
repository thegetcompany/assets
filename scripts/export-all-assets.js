const fs = require("fs").promises;
const path = require("path");

// Ubah string jadi PascalCase, '-' di akhir jadi "Min"
function toPascalCase(name) {
  if (name.endsWith("-")) {
    name = name.slice(0, -1) + " Min";
  }

  name = name.replace(/[^a-zA-Z0-9]+/g, " "); // ganti simbol jadi spasi

  return name
    .split(" ")
    .filter(Boolean)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join("");
}

// Pastikan nama export unik, tambahkan angka kalau duplikat
function getUniqueName(name, existing) {
  let uniqueName = name;
  let count = 1;
  while (existing.has(uniqueName)) {
    count++;
    uniqueName = name + count;
  }
  existing.add(uniqueName);
  return uniqueName;
}

async function writeIndexFile() {
  const tsxDir = path.join(__dirname, "../src/components"); // folder TSX
  const imagesDir = path.join(__dirname, "../src/assets/images"); // folder images (semua subfolder)
  const indexFile = path.join(__dirname, "../src/index.ts");

  const tsxFiles = await getAllFiles(tsxDir, ".tsx");
  const imageFiles = await getAllFiles(imagesDir, ".png"); // semua PNG termasuk subfolder

  let lines = [];
  const existingExports = new Set();

  // Export TSX
  lines.push("// Icons");
  tsxFiles.forEach((filePath) => {
    const baseName = path.basename(filePath, ".tsx");
    const exportName = getUniqueName(toPascalCase(baseName), existingExports);
    lines.push(
      `export { default as ${exportName} } from './components/${baseName}';`
    );
  });

  // Export PNG
  lines.push("\n// Icons png");
  imageFiles.forEach((filePath) => {
    const baseName = path.basename(filePath, ".png").replace(/_icon$/, ""); // hapus _icon
    const exportName = getUniqueName(
      toPascalCase(baseName) + "Png",
      existingExports
    );

    // path relatif ke folder images
    const relativePath = path.relative(imagesDir, filePath).replace(/\\/g, "/");
    lines.push(
      `export { default as ${exportName} } from './assets/images/${relativePath}';`
    );
  });

  await fs.writeFile(indexFile, lines.join("\n"));
  console.log("index.ts generated successfully!");
}

// Helper: ambil semua file dengan ekstensi tertentu (rekursif)
async function getAllFiles(dir, ext) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  let files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    console.log(fullPath);
    if (entry.isDirectory()) {
      files = files.concat(await getAllFiles(fullPath, ext));
    } else if (entry.isFile() && fullPath.endsWith(ext)) {
      files.push(fullPath);
    }
  }

  return files;
}

// Jalankan
writeIndexFile().catch(console.error);
