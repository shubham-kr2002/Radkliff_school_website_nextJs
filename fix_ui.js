const fs = require('fs');

let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// The new local image paths
const images = Array.from({length: 14}, (_, i) => `/gallery/radkliffe-${i + 1}.jpeg`);
let imageIndex = 0;

// Replace all instances of Google Cloud images with our new local ones
content = content.replace(/https:\/\/lh3\.googleusercontent\.com[^"]+/g, () => {
  const newImg = images[imageIndex % images.length];
  imageIndex++;
  return newImg;
});

// Also fix the Hero wave position
content = content.replace(
  /absolute bottom-4 md:bottom-24 -left-\[5%\] w-\[110%\] z-30 pointer-events-none sway-element opacity-70/g,
  'absolute -bottom-4 md:bottom-0 -left-[5%] w-[110%] z-30 pointer-events-none sway-element opacity-70'
);

fs.writeFileSync('src/app/page.tsx', content, 'utf8');

// Now fix FloatingWhatsApp
let waContent = fs.readFileSync('src/components/FloatingWhatsApp.tsx', 'utf8');
waContent = waContent.replace(
  /className="fixed bottom-24 md:bottom-8 right-6 z-\[200\]/g,
  'className="fixed bottom-6 md:bottom-8 right-6 z-[200]'
);
fs.writeFileSync('src/components/FloatingWhatsApp.tsx', waContent, 'utf8');

console.log("Images replaced and responsive positions fixed!");
