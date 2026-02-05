#!/usr/bin/env node

/**
 * Performance Monitoring Script
 * Run this after building to check performance metrics
 * Usage: node scripts/performance-check.js
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Analyzing Performance Metrics...\n');

// Check build output sizes
const buildManifest = path.join(process.cwd(), '.next/build-manifest.json');

if (fs.existsSync(buildManifest)) {
  const manifest = JSON.parse(fs.readFileSync(buildManifest, 'utf8'));
  console.log('📦 Build Manifest Analysis:');
  console.log('Pages built:', Object.keys(manifest.pages).length);
  console.log('');
}

// Check bundle sizes
const nextDir = path.join(process.cwd(), '.next/static');

function getDirectorySize(dirPath) {
  let size = 0;

  if (!fs.existsSync(dirPath)) return size;

  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      size += getDirectorySize(filePath);
    } else {
      size += stat.size;
    }
  });

  return size;
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

if (fs.existsSync(nextDir)) {
  const totalSize = getDirectorySize(nextDir);
  console.log('📊 Bundle Size Analysis:');
  console.log('Total static assets:', formatBytes(totalSize));
  console.log('');
}

// Performance budgets
const budgets = {
  firstLoadJS: 170 * 1024, // 170 KB
  pageSpecific: 25 * 1024,  // 25 KB
  sharedChunks: 90 * 1024,  // 90 KB
};

console.log('🎯 Performance Budgets:');
console.log('First Load JS Budget: < 170 KB');
console.log('Page-specific Budget: < 25 KB');
console.log('Shared Chunks Budget: < 90 KB');
console.log('');

console.log('✅ Performance Check Complete!');
console.log('');
console.log('💡 Tips:');
console.log('- Run "npm run analyze" for detailed bundle analysis');
console.log('- Check Lighthouse scores in production');
console.log('- Monitor Web Vitals in browser console (development)');
console.log('- Test PWA offline functionality');
console.log('');
