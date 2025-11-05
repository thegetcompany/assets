const fs = require("fs");
const path = require("path");
const {initializeApp} = require("firebase/app");
const {getStorage, ref, listAll, getDownloadURL} = require("firebase/storage");
require("dotenv").config();

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app, `gs://${firebaseConfig.storageBucket}`);
const outputDir = path.join(__dirname, "../src/assets/images/flags");

async function generateFlagIcons() {
  console.log("🚀 Mulai mengambil daftar ikon dari Firebase Storage...");

  const flagsRef = ref(storage, "flagIcons");
  const result = await listAll(flagsRef);

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, {recursive: true});
    console.log(`📁 Folder output dibuat: ${outputDir}`);
  }

  let total = 0;

  for (const item of result.items) {
    const fileName = item.name;
    const code = path.basename(fileName, path.extname(fileName)).toLowerCase();

    process.stdout.write(`⬇️  Mengunduh ${fileName}... `);

    try {
      const downloadUrl = await getDownloadURL(item);
      const res = await fetch(downloadUrl);
      const buffer = await res.arrayBuffer();
      const localPath = path.join(outputDir, fileName);
      fs.writeFileSync(localPath, Buffer.from(buffer));
      total++;
      console.log("✅ selesai");
    } catch (err) {
      console.log(`❌ gagal (${err.message})`);
    }
  }

  console.log(`\n🏁 Selesai: ${total} ikon berhasil diunduh ke ${outputDir}`);
}

generateFlagIcons().catch((err) => {
  console.error("🔥 Terjadi kesalahan:", err);
});
