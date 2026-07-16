# Content Credentials Remover

A client-side web tool to remove Content Credentials (C2PA) metadata from images. No uploads, fully private, and works entirely in your browser.

- Removes C2PA, XMP, EXIF, and other metadata from images
- All processing happens in your browser - no files are uploaded anywhere
- Preview C2PA metadata before cleaning so you know what will be removed
- Supports multiple image formats: JPG, PNG, WebP, GIF, BMP, TIFF, AVIF

## Demo

Visit the live demo: [Content Credentials Remover](https://inject3r.github.io/content-credentials-remover)

## How It Works

1. Upload one or more images via drag-and-drop or file picker
2. The tool reads and displays any C2PA metadata found in the image
3. Click "Process All" to strip all metadata using canvas re-encoding
4. Download cleaned images individually or all at once
5. Download buttons only appear for images that have been cleaned

## Supported Formats

| Format | Support |
| ------ | ------- |
| JPEG   | Yes     |
| PNG    | Yes     |
| WebP   | Yes     |
| GIF    | Yes     |
| BMP    | Yes     |
| TIFF   | Yes     |
| AVIF   | Yes     |
