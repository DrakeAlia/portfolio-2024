# Portfolio Scripts

## Screenshot Capture Script

Automatically captures screenshots of all project live URLs and saves them to `/public/images/projects/`.

### Setup

1. Install dependencies:
```bash
npm install
```

### Usage

Run the screenshot capture script:
```bash
npm run capture-screenshots
```

This will:
- Launch a headless browser
- Visit each project's live URL
- Capture a 1920x1080 screenshot
- Save images to `/public/images/projects/{slug}.png`

### Adding New Projects

To capture screenshots for new projects, edit `scripts/capture-screenshots.js` and add your project to the `projects` array:

```javascript
{
  slug: 'your-project-slug',
  url: 'https://your-project-url.com',
  viewport: { width: 1920, height: 1080 }
}
```

### Customization

You can customize the screenshot behavior by modifying:
- **Viewport size**: Change the `viewport` dimensions
- **Wait time**: Adjust `waitForTimeout()` for animations to settle
- **Full page**: Set `fullPage: true` in `page.screenshot()` to capture the entire page
- **Image format**: Change `type: 'png'` to `'jpeg'` or `'webp'`

### Troubleshooting

**Error: Failed to launch browser**
- On Linux, install required dependencies:
  ```bash
  sudo apt-get install -y chromium-browser
  ```

**Timeout errors**
- Increase the timeout value in `page.goto()` options
- Check if the URL is accessible

**Memory issues**
- Screenshots are captured sequentially to avoid memory issues
- Close other applications if needed
