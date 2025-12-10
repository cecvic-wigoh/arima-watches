#!/bin/bash

# Script to update product images for the Arsenyo circular gallery
# This script copies images from product_images folder to public folder

echo "🔄 Updating product images for Arsenyo circular gallery..."

# Check if product_images folder exists
if [ ! -d "product_images" ]; then
    echo "❌ Error: product_images folder not found!"
    echo "Please create a product_images folder with your watch images."
    exit 1
fi

# Copy images to public folder
echo "📁 Copying images from product_images to public..."
cp product_images/* public/ 2>/dev/null

if [ $? -eq 0 ]; then
    echo "✅ Successfully copied images to public folder"
    echo "📊 Images available:"
    ls -la public/*.jpeg public/*.jpg public/*.png 2>/dev/null | wc -l | xargs echo "   - Total images:"
else
    echo "❌ Error copying images. Please check file permissions."
    exit 1
fi

echo "🎉 Image update complete!"
echo "💡 Don't forget to update the watch-gallery.tsx file with new image names if needed."
