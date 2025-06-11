import React from 'react';

// Import images as static imports
import jacketsImage from '../assets/images/jackets.jpg';
import baseLayersImage from '../assets/images/base-layers.jpg';
import footwearImage from '../assets/images/accessories.jpg';

interface CategoryItem {
  title: string;
  image: any;
  alt: string;
}

const categories: CategoryItem[] = [
  {
    title: 'Jackets',
    image: jacketsImage,
    alt: 'Outdoor hiking jacket'
  },
  {
    title: 'Base Layers',
    image: baseLayersImage,
    alt: 'Comfortable base layer clothing'
  },
  {
    title: 'Footwear',
    image: footwearImage,
    alt: 'Outdoor hiking and trail footwear'
  }
];

const FeaturedCategories: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-center mb-16">Featured Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {categories.map((category) => (
          <div key={category.title} className="group cursor-pointer">
            <div className="relative h-96 lg:h-[28rem] bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <img
                src={category.image}
                alt={category.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <h3 className="text-3xl font-bold text-white">{category.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories; 