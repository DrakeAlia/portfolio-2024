#!/usr/bin/env node

/**
 * Screenshot Capture Script
 *
 * Automatically captures screenshots of all project live URLs
 * and saves them to /public/images/projects/
 *
 * Usage: npm run capture-screenshots
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Import projects from the TypeScript file
// For simplicity, we'll define them here or you can use ts-node
const projects = [
  {
    slug: 'ironworks-gym',
    url: 'https://www.iron-works.com',
    viewport: { width: 1920, height: 1080 }
  },
  {
    slug: 'fit-and-fly',
    url: 'https://fit-and-fly.vercel.app/',
    viewport: { width: 1920, height: 1080 }
  },
  {
    slug: 'infinitepages',
    url: 'https://book-reviews-orcin.vercel.app/',
    viewport: { width: 1920, height: 1080 }
  },
  {
    slug: 'green-thumb',
    url: 'https://green-thumb-mu.vercel.app/',
    viewport: { width: 1920, height: 1080 }
  },
  {
    slug: 'vitaflow',
    url: 'https://vitaflow.vercel.app/',
    viewport: { width: 1920, height: 1080 }
  }
];

async function captureScreenshot(browser, project) {
  console.log(`📸 Capturing screenshot for ${project.slug}...`);

  const page = await browser.newPage();

  try {
    // Set viewport
    await page.setViewport(project.viewport);

    // Navigate to the URL
    await page.goto(project.url, {
      waitUntil: 'networkidle2',
      timeout: 30000
    });

    // Wait a bit for animations to settle
    await page.waitForTimeout(2000);

    // Create output directory if it doesn't exist
    const outputDir = path.join(__dirname, '..', 'public', 'images', 'projects');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Capture screenshot
    const outputPath = path.join(outputDir, `${project.slug}.png`);
    await page.screenshot({
      path: outputPath,
      fullPage: false, // Only capture viewport, not full page
      type: 'png'
    });

    console.log(`✅ Screenshot saved: ${outputPath}`);
  } catch (error) {
    console.error(`❌ Error capturing ${project.slug}:`, error.message);
  } finally {
    await page.close();
  }
}

async function main() {
  console.log('🚀 Starting screenshot capture...\n');

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    // Capture screenshots sequentially to avoid overwhelming the system
    for (const project of projects) {
      await captureScreenshot(browser, project);
    }

    console.log('\n✨ All screenshots captured successfully!');
  } catch (error) {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

main();
