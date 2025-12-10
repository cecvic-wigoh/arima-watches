# Circular Gallery Component Implementation

## Overview

The circular gallery component has been successfully integrated into the Arsenyo watch website. This component creates a stunning 3D circular carousel that showcases luxury watches with scroll-based rotation and auto-rotation when not scrolling.

## Components Created

### 1. `circular-gallery.tsx`
- **Location**: `/src/components/ui/circular-gallery.tsx`
- **Purpose**: Core circular gallery component with 3D rotation effects
- **Features**:
  - Scroll-based rotation
  - Auto-rotation when not scrolling
  - Configurable radius and rotation speed
  - Responsive design with opacity transitions
  - Accessibility features (ARIA labels)

### 2. `watch-gallery.tsx`
- **Location**: `/src/components/ui/watch-gallery.tsx`
- **Purpose**: Watch-specific implementation using the circular gallery
- **Features**:
  - Luxury watch data with Alpine/Swiss themes
  - High-quality Unsplash images
  - Consistent styling with the main site

## Integration

### Main Page Integration
The watch gallery has been integrated into the Features section of the main page (`/src/app/page.tsx`):

```tsx
import WatchGallery from "@/components/ui/watch-gallery";

// In the Features section:
<WatchGallery />
```

### Demo Page
A separate demo page is available at `/demo` to showcase the component independently.

## Data Structure

The gallery uses the following data structure:

```tsx
interface GalleryItem {
  common: string;        // Watch name
  binomial: string;      // Watch description/type
  photo: {
    url: string;         // Image URL
    text: string;        // Alt text
    pos?: string;        // Object position (optional)
    by: string;          // Photo credit
  };
}
```

## Features

### 1. Scroll-Based Rotation
- The gallery rotates based on scroll position
- Smooth transitions between scroll and auto-rotation

### 2. Auto-Rotation
- When not scrolling, the gallery automatically rotates
- Configurable rotation speed

### 3. 3D Effects
- Perspective transforms for realistic 3D appearance
- Opacity changes based on item position
- Smooth transitions

### 4. Responsive Design
- Works on all screen sizes
- Optimized for mobile and desktop

### 5. Performance Optimized
- Uses Next.js Image component for optimization
- Efficient animation frames
- Passive scroll listeners

## Customization

### Radius
Control how far items are from the center:
```tsx
<CircularGallery items={data} radius={500} />
```

### Auto-Rotation Speed
Control the speed of auto-rotation:
```tsx
<CircularGallery items={data} autoRotateSpeed={0.015} />
```

### Styling
The component uses Tailwind CSS classes and can be customized:
- Background colors and transparency
- Border styles
- Text colors and typography
- Shadow effects

## Images Used

The gallery uses local product images from the Arsenyo collection:
- Alpine Chronograph
- Mountain Peak
- Alpine Explorer
- Swiss Heritage
- Alpine Diver
- Mountain Classic
- Alpine Sport

All images are stored in the `/public` folder and served locally for optimal performance.

## Image Setup

The product images were copied from `/product_images` to `/public` to make them accessible via Next.js static file serving:

```bash
cp product_images/* public/
```

This ensures the images are properly served and optimized by Next.js.

## Technical Implementation

### Dependencies
- React 19.1.0
- Next.js 15.5.2
- TypeScript
- Tailwind CSS v4
- Next.js Image component

### Key Features
- TypeScript interfaces for type safety
- React.forwardRef for ref forwarding
- useEffect hooks for scroll and animation management
- CSS transforms for 3D effects
- Responsive design with Tailwind CSS

## Browser Support

The component uses modern CSS features:
- CSS transforms (3D)
- CSS Grid
- Flexbox
- CSS custom properties

Works in all modern browsers that support these features.

## Performance Considerations

- Images are optimized using Next.js Image component
- Animation frames are properly cleaned up
- Scroll listeners use passive option
- Efficient opacity calculations

## Future Enhancements

Potential improvements:
1. Touch/swipe support for mobile
2. Keyboard navigation
3. Click to focus on specific items
4. Custom easing functions
5. More animation options
6. Lazy loading for images

## Usage Example

```tsx
import { CircularGallery } from '@/components/ui/circular-gallery';

const myData = [
  {
    common: "My Item",
    binomial: "Description",
    photo: {
      url: "https://example.com/image.jpg",
      text: "Alt text",
      by: "Photographer"
    }
  }
];

<CircularGallery 
  items={myData} 
  radius={600} 
  autoRotateSpeed={0.02} 
/>
```
