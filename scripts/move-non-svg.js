const fs = require("fs").promises;
const path = require("path");

const inputDir = path.join(__dirname, "../src/assets/icons");
const imagesDir = path.join(__dirname, "../src/assets/images");

// Fungsi rekursif untuk pindahkan semua file non-SVG
async function moveNonSvgFiles(srcDir, destDir) {
  const entries = await fs.readdir(srcDir, { withFileTypes: true });

  for (const entry of entries) {
    console.log(`Processing entry: ${entry.name} in ${srcDir}`); // Log progress
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);

    if (entry.isDirectory()) {
      // Buat folder tujuan jika belum ada
      console.log(`Creating directory: ${destPath}`); // Log directory creation
      await fs.mkdir(destPath, { recursive: true });
      await moveNonSvgFiles(srcPath, destPath); // rekursif
    } else if (entry.isFile() && !srcPath.endsWith(".svg")) {
      // Pastikan folder tujuan ada
      console.log(`Ensuring destination directory exists for: ${destPath}`); // Log directory check
      await fs.mkdir(path.dirname(destPath), { recursive: true });
      await fs.rename(srcPath, destPath);
      console.log(`Moved ${srcPath} -> ${destPath}`);
    }
  }
}

// Jalankan
moveNonSvgFiles(inputDir, imagesDir).catch(console.error);