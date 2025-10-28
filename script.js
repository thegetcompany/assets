import fs from "fs";
import sharp from "sharp";
import path from "path";

export function svgToPngPlugin({
  size = 200,
} = {}) {
  return {
    name: "svg-to-png",

    async load(id) {
      if (!id.endsWith(".svg")) return null;

      try {
        const svgBuffer = fs.readFileSync(id);

        const pngBuffer = await sharp(svgBuffer)
          .resize(size, size, {fit: "contain", background: {r: 0, g: 0, b: 0, alpha: 0}})
          .png()
          .toBuffer();

        const base64 = pngBuffer.toString("base64");
        const dataUri = `data:image/png;base64,${base64}`;

        return `export default ${JSON.stringify(dataUri)};`;
      } catch (err) {
        console.error(`❌ Failed to convert ${path.basename(id)}:`, err);
        return null;
      }
    },
  };
}
