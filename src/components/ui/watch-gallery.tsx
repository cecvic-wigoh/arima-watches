import React from 'react';
import { CircularGallery, GalleryItem } from './circular-gallery';

const watchGalleryData: GalleryItem[] = [
  {
    common: 'Alpine Chronograph',
    binomial: 'Swiss Precision Movement',
    photo: {
      url: '/Generated Image September 01, 2025 - 5_54PM.webp',
      text: 'Luxury chronograph watch with premium leather strap',
      pos: '50% 40%',
      by: 'Arima Collection'
    }
  },
  {
    common: 'Mountain Peak',
    binomial: 'Automatic Caliber',
    photo: {
      url: '/Generated Image September 01, 2025 - 5_54PM(1).webp',
      text: 'Elegant watch with sophisticated dial design',
      pos: '45% 35%',
      by: 'Arima Collection'
    }
  },
  {
    common: 'Alpine Explorer',
    binomial: 'Mechanical Movement',
    photo: {
      url: '/Generated Image September 01, 2025 - 5_54PM(2).webp',
      text: 'Classic watch with refined craftsmanship',
      pos: '55% 45%',
      by: 'Arima Collection'
    }
  },
  {
    common: 'Swiss Heritage',
    binomial: 'Manual Wind',
    photo: {
      url: '/Generated Image September 01, 2025 - 5_54PM(3).webp',
      text: 'Vintage style watch with timeless elegance',
      pos: '40% 30%',
      by: 'Arima Collection'
    }
  },
  {
    common: 'Alpine Diver',
    binomial: 'Water Resistant',
    photo: {
      url: '/Generated Image September 01, 2025 - 5_54PM(4).webp',
      text: 'Diving watch with robust construction',
      pos: '50% 50%',
      by: 'Arima Collection'
    }
  },
  {
    common: 'Mountain Classic',
    binomial: 'Swiss Made',
    photo: {
      url: '/Generated Image September 01, 2025 - 5_53PM.webp',
      text: 'Minimalist watch with clean design',
      pos: '60% 40%',
      by: 'Arima Collection'
    }
  },
  {
    common: 'Alpine Sport',
    binomial: 'Chronograph Function',
    photo: {
      url: '/Generated Image September 01, 2025 - 5_53PM(1).webp',
      text: 'Sport watch with advanced functionality',
      pos: '35% 35%',
      by: 'Arima Collection'
    }
  },
];

const WatchGallery = () => {
  return (
    <div className="w-full bg-transparent text-white" style={{ height: '500vh' }}>
      <div className="w-full h-screen sticky top-0 flex flex-col items-center justify-center overflow-hidden">
        <div className="text-center mb-8 absolute top-16 z-10">
          <h1 className="text-4xl font-bold hero-text-shadow">Our Collection</h1>
          <p className="text-white/80 text-lg">Scroll to explore our timepieces</p>
        </div>
        <div className="w-full h-full">
          <CircularGallery 
            items={watchGalleryData} 
            radius={500}
            autoRotateSpeed={0.015}
          />
        </div>
      </div>
    </div>
  );
};

export default WatchGallery;
