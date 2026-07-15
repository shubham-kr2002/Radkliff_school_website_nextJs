const fs = require('fs');

let pageContent = fs.readFileSync('src/app/page.tsx', 'utf8');

// Fix Hero section 100svh
pageContent = pageContent.replace('className="relative min-h-[100svh] flex flex-col', 'className="relative h-[100svh] flex flex-col');

// Fix green line to be exactly at bottom
pageContent = pageContent.replace('-bottom-4 md:bottom-0 -left-[5%]', 'bottom-0 -left-[5%]');

// Split point
const splitStr = '        {/* Narrative Block: The Journey */}';
const splitIndex = pageContent.indexOf(splitStr);
const endSplitIndex = pageContent.indexOf('      </main>');

if (splitIndex === -1 || endSplitIndex === -1) {
    console.error('Split point not found');
    process.exit(1);
}

const part1 = pageContent.substring(0, splitIndex);
let part2 = pageContent.substring(splitIndex, endSplitIndex);

// Close tags for page.tsx
const newPageContent = part1 + '        </section>\n      </main>\n      <Footer />\n    </>\n  );\n}\n';

// Remove the dangling </section> in part2 (it was closing <section id="home">)
// Wait, the newline might be different on Windows (\r\n). Let's use a regex.
part2 = part2.replace(/<\/section>[\s\r\n]*{\/\* Section: The Journey Begins \*\//, '{/* Section: The Journey Begins */');

const galleryContent = `"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import DynamicGreeting from "@/components/DynamicGreeting";

export default function Gallery() {
  return (
    <>
      <Header />
      <main>
` + part2 + `
      </main>
      <Footer />
    </>
  );
}
`;

fs.writeFileSync('src/app/page.tsx', newPageContent);
if (!fs.existsSync('src/app/gallery')) {
    fs.mkdirSync('src/app/gallery', { recursive: true });
}
fs.writeFileSync('src/app/gallery/page.tsx', galleryContent);
console.log('Done splitting pages.');
