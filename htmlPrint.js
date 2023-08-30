const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function logHTMLVisual(htmlContent, folder, fileName) {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  // Set the HTML content of the page
  await page.setContent(htmlContent);

  // Capture a screenshot of the page as a buffer
  const screenshotBuffer = await page.screenshot();

  // Create the folder if it doesn't exist
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder, { recursive: true });
  }

  // Construct the full path including the folder and filename
  const filePath = path.join(folder, fileName);

  // Write the screenshot to the specified file
  fs.writeFileSync(filePath, screenshotBuffer);

  // Log a message indicating where the screenshot was saved
  console.log(`Screenshot saved as ${filePath}`);

  // Close the browser
  await browser.close();
}

async function openHTMLInBrowser(htmlContent) {
    // Create a temporary HTML file
    const tempHtmlPath = 'temp.html';
    fs.writeFileSync(tempHtmlPath, htmlContent);
  
    try {
      // Use dynamic import to load the 'open' package
      const open = await import('open');
      
      // Open the HTML file in the default web browser
      open.default(tempHtmlPath, { wait: false }); // { wait: false } makes it not wait for the browser to close
    } catch (error) {
      console.error('Error:', error);
    }
  
    // Remove the temporary HTML file (optional)
    // fs.unlinkSync(tempHtmlPath);
  }

module.exports = {
    logHTMLVisual:logHTMLVisual,
    openHTMLInBrowser:openHTMLInBrowser
}

