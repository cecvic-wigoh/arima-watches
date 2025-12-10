#!/bin/bash

# Script to convert all PNG and JPEG images to optimized WebP format
# This reduces file sizes significantly while maintaining quality

set -e

echo "🖼️  Converting images to WebP format..."

# Quality setting (0-100, 85 is a good balance)
QUALITY=85

# Counter files
TEMP_DIR=$(mktemp -d)
CONVERTED_FILE="$TEMP_DIR/converted"
SKIPPED_FILE="$TEMP_DIR/skipped"
SIZE_FILE="$TEMP_DIR/size"

echo "0" > "$CONVERTED_FILE"
echo "0" > "$SKIPPED_FILE"
echo "0" > "$SIZE_FILE"

# Function to convert a single image
convert_image() {
    local input_file="$1"
    local output_file="${input_file%.*}.webp"
    
    # Skip if WebP already exists and is newer
    if [ -f "$output_file" ] && [ "$output_file" -nt "$input_file" ]; then
        echo "⏭️  Skipping $input_file (WebP already exists and is newer)"
        local skipped=$(cat "$SKIPPED_FILE")
        echo $((skipped + 1)) > "$SKIPPED_FILE"
        return
    fi
    
    # Get original size
    local original_size=$(stat -f%z "$input_file" 2>/dev/null || stat -c%s "$input_file" 2>/dev/null)
    
    # Convert to WebP
    if cwebp -q "$QUALITY" -m 6 "$input_file" -o "$output_file" > /dev/null 2>&1; then
        local new_size=$(stat -f%z "$output_file" 2>/dev/null || stat -c%s "$output_file" 2>/dev/null)
        local saved=$((original_size - new_size))
        local saved_percent=$((saved * 100 / original_size))
        
        echo "✅ Converted: $input_file → $output_file (saved ${saved_percent}%)"
        local converted=$(cat "$CONVERTED_FILE")
        echo $((converted + 1)) > "$CONVERTED_FILE"
        local total_size=$(cat "$SIZE_FILE")
        echo $((total_size + saved)) > "$SIZE_FILE"
    else
        echo "❌ Failed to convert: $input_file"
        return 1
    fi
}

# Process public directory recursively
if [ -d "public" ]; then
    echo ""
    echo "📁 Processing public directory..."
    find "public" -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" \) ! -name "*.webp" | while read -r file; do
        convert_image "$file"
    done
fi

# Process product_images directory recursively
if [ -d "product_images" ]; then
    echo ""
    echo "📁 Processing product_images directory..."
    find "product_images" -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" \) ! -name "*.webp" | while read -r file; do
        convert_image "$file"
    done
fi

# Process renders directory if it exists
if [ -d "renders" ]; then
    echo ""
    echo "📁 Processing renders directory..."
    find "renders" -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" \) ! -name "*.webp" | while read -r file; do
        convert_image "$file"
    done
fi

# Wait a moment for all conversions to complete
sleep 1

# Read final counts
CONVERTED=$(cat "$CONVERTED_FILE")
SKIPPED=$(cat "$SKIPPED_FILE")
TOTAL_SIZE_SAVED=$(cat "$SIZE_FILE")

# Cleanup
rm -rf "$TEMP_DIR"

# Summary
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📊 Conversion Summary:"
echo "   ✅ Converted: $CONVERTED files"
echo "   ⏭️  Skipped: $SKIPPED files"
if [ $TOTAL_SIZE_SAVED -gt 0 ]; then
    TOTAL_SIZE_MB=$((TOTAL_SIZE_SAVED / 1024 / 1024))
    echo "   💾 Total size saved: ~${TOTAL_SIZE_MB}MB"
fi
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "✨ Conversion complete!"
echo "💡 Next step: Update code references to use .webp files"
