#!/bin/bash

# Script to remove original PNG/JPEG images after WebP conversion
# This further reduces build size since all code now uses WebP files

set -e

echo "🗑️  Removing original PNG/JPEG images (WebP versions are being used)..."

REMOVED=0
TOTAL_SIZE_FREED=0

# Function to remove an image if WebP exists
remove_if_webp_exists() {
    local original_file="$1"
    local webp_file="${original_file%.*}.webp"
    
    if [ -f "$webp_file" ]; then
        local size=$(stat -f%z "$original_file" 2>/dev/null || stat -c%s "$original_file" 2>/dev/null)
        rm "$original_file"
        echo "✅ Removed: $original_file (WebP exists: $webp_file)"
        ((REMOVED++))
        TOTAL_SIZE_FREED=$((TOTAL_SIZE_FREED + size))
    else
        echo "⚠️  Keeping: $original_file (no WebP version found)"
    fi
}

# Process public directory
if [ -d "public" ]; then
    echo ""
    echo "📁 Processing public directory..."
    find "public" -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" \) ! -name "*.webp" | while read -r file; do
        remove_if_webp_exists "$file"
    done
fi

# Wait a moment for all operations to complete
sleep 1

# Summary
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📊 Removal Summary:"
echo "   🗑️  Removed: $REMOVED files"
if [ $TOTAL_SIZE_FREED -gt 0 ]; then
    TOTAL_SIZE_MB=$((TOTAL_SIZE_FREED / 1024 / 1024))
    echo "   💾 Space freed: ~${TOTAL_SIZE_MB}MB"
fi
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "✨ Cleanup complete!"

