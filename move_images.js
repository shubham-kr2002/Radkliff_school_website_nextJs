const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, 'image');
const destDir = path.join(__dirname, 'public', 'gallery');

if (!fs.existsSync(destDir)){
    fs.mkdirSync(destDir, { recursive: true });
}

fs.readdir(sourceDir, (err, files) => {
  if (err) {
    console.error("Could not list the directory.", err);
    process.exit(1);
  }

  files.forEach((file, index) => {
    // Only process jpeg/jpg/png files
    if (file.match(/\.(jpeg|jpg|png)$/i)) {
      const ext = path.extname(file);
      const newName = `radkliffe-${index + 1}${ext}`;
      fs.copyFileSync(path.join(sourceDir, file), path.join(destDir, newName));
      console.log(`Copied ${file} -> ${newName}`);
    }
  });
});
