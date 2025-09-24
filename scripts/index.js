const fs = require('fs');
const path = require('path');
const scriptsDir = path.join(__dirname);

fs.readdir(scriptsDir, (err, files) => {
  if (err) {
    console.error('Error reading scripts directory:', err);
    return;
  }
  files.forEach(file => {
    if (file !== 'index.js' && file.endsWith('.js')) {
      require(path.join(scriptsDir, file));
    }
  });
});

