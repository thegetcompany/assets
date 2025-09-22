import fs from 'fs';
import path from 'path';

const requiredConfig = '@thegetcompany:registry=https://npm.pkg.github.com';

if (typeof process !== 'undefined' && process.cwd) {
  try {
    const npmrcPath = path.resolve(process.cwd(), '.npmrc');
    const npmrcContent = fs.existsSync(npmrcPath) ? fs.readFileSync(npmrcPath, 'utf-8') : '';
    if (!npmrcContent.includes(requiredConfig)) {
      console.error(
        'ERROR: File .npmrc tidak ditemukan atau tidak berisi registry yang benar.\n' +
        'Buat file .npmrc di root project dengan isi:\n' +
        '@thegetcompany:registry=https://npm.pkg.github.com\n' +
        'Atau install dengan: npm install @thegetcompany/assets --registry=https://npm.pkg.github.com'
      );
      process.exit(1);
    }
  } catch (error) {
    console.error('ERROR: Gagal memeriksa .npmrc. Pastikan file ada dan bisa dibaca.');
    process.exit(1);
  }
}