
import fs from 'fs';
import path from 'path';



// Paths for source and destination
const sourceFolder = 'C:\\Users\\Mihai\\Desktop\\m-site\\src\\Assets';
const destinationFolder = 'C:\\Users\\Mihai\\Desktop\\aa';
const outputFile = path.join(destinationFolder, 'imageList.js'); // Save the file in the destination folder

// Ensure destination folder exists
if (!fs.existsSync(destinationFolder)) {
  fs.mkdirSync(destinationFolder, { recursive: true });
}

// Filter and get all image files from the source folder
const images = fs.readdirSync(sourceFolder).filter((file) => /\.(png|jpe?g|svg)$/i.test(file));

// Copy images to the destination folder
images.forEach((file) => {
  const srcPath = path.join(sourceFolder, file);
  const destPath = path.join(destinationFolder, file);
  fs.copyFileSync(srcPath, destPath);
});

console.log('Images copied successfully to:', destinationFolder);

// Generate `imageList.js` with imports and exports
const imports = images
    .map((file, index) => `import img${index} from './${file}';`)
    .join('\n');

const exports = `
export const images = [
  ${images.map((_, index) => `{ src: img${index}, alt: 'Image ${index + 1}' }`).join(',\n  ')}
];
`;

// Write to `imageList.js`
fs.writeFileSync(outputFile, `${imports}\n\n${exports}`);
console.log('imageList.js generated successfully at:', outputFile);