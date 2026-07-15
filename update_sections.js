const fs = require('fs');

// Read gallery page
let galleryContent = fs.readFileSync('src/app/gallery/page.tsx', 'utf8');

// Find start and end of The Journey Begins
const startMarker = '{/* Section: The Journey Begins */}';
const endMarker = '<DynamicGreeting />';

const startIndex = galleryContent.indexOf(startMarker);
const endIndex = galleryContent.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
  console.log('Could not find section in gallery/page.tsx');
  process.exit(1);
}

// Extract the section
const journeyBeginsSection = galleryContent.substring(startIndex, endIndex).trim();

// Remove from gallery page
const newGalleryContent = galleryContent.substring(0, startIndex) + galleryContent.substring(endIndex);
fs.writeFileSync('src/app/gallery/page.tsx', newGalleryContent);
console.log('Removed from gallery/page.tsx');

// Read programs page
let programsContent = fs.readFileSync('src/app/programs/page.tsx', 'utf8');

// Remove Skills Slider Section
const sliderStartMarker = '{/* Skills Slider Section */}';
const breakdownMarker = '{/* Programs Breakdown */}';

const sliderStartIndex = programsContent.indexOf(sliderStartMarker);
const breakdownIndex = programsContent.indexOf(breakdownMarker);

if (sliderStartIndex === -1 || breakdownIndex === -1) {
  console.log('Could not find markers in programs/page.tsx');
  process.exit(1);
}

// Remove slider and insert Journey Begins
const beforeSlider = programsContent.substring(0, sliderStartIndex);
const afterSlider = programsContent.substring(breakdownIndex);

const newProgramsContent = beforeSlider + journeyBeginsSection + '\n\n        ' + afterSlider;
fs.writeFileSync('src/app/programs/page.tsx', newProgramsContent);
console.log('Updated programs/page.tsx');

