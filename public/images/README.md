# Images Directory

This directory is for storing website images. To add new images:

1. Create subdirectories to organize images by category:
   - `/competitions` - Competition photos
   - `/team` - Team photos
   - `/robots` - Robot photos
   - `/events` - Event photos

2. Image Guidelines:
   - Use descriptive filenames (e.g., `2023-regional-competition.jpg`)
   - Recommended formats: JPG for photos, PNG for logos/graphics
   - Optimize images before uploading (recommended max size: 1MB)
   - Recommended dimensions:
     - Hero/carousel images: 1920x1080px
     - Gallery thumbnails: 800x800px
     - Team photos: 1200x800px

3. To use images in components:
   ```jsx
   // Example usage
   <img src="/images/competitions/2023-regional.jpg" alt="2023 Regional Competition" />
   ```

Note: Keep this directory organized and regularly clean up unused images.