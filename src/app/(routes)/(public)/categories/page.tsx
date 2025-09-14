import React from 'react';
import DefaultLayout from '@/components/layouts/default-layout';
import Link from 'next/link';
import Image from 'next/image';

// Dummy data for categories
const categories= [
  { id: 1, name: 'Apparel', description: 'Timeless clothing for every season.', imageUrl: 'https://placehold.co/600x400/3d4d6b/ffffff?text=Apparel' },
  { id: 2, name: 'Homeware', description: 'Elevate your living space with our handcrafted decor.', imageUrl: 'https://placehold.co/600x400/606c88/ffffff?text=Homeware' },
  { id: 3, name: 'Accessories', description: 'The perfect finishing touch for any outfit.', imageUrl: 'https://placehold.co/600x400/94a3b8/ffffff?text=Accessories' },
  { id: 4, name: 'Stationery', description: 'Pens, journals, and everything you need for inspired writing.', imageUrl: 'https://placehold.co/600x400/6b7280/ffffff?text=Stationery' },
  { id: 5, name: 'Footwear', description: 'Sustainable and comfortable shoes for any journey.', imageUrl: 'https://placehold.co/600x400/4b5563/ffffff?text=Footwear' },
  { id: 6, name: 'Wellness', description: 'Products for your body and mind.', imageUrl: 'https://placehold.co/600x400/374151/ffffff?text=Wellness' },
];

const CategoriesPage = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl text-center mb-16">
          Shop by Category
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/shop?category=${encodeURIComponent(category.name)}`}
              className="group relative block overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative">
                <Image
                  loading='lazy'
                  width={600}
                  height={400}  
                  src={category.imageUrl}
                  alt={`Image of ${category.name} category`}
                  className="w-full h-80 object-cover rounded-t-xl transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80 rounded-t-xl"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                  <h2 className="text-3xl font-bold">{category.name}</h2>
                  <p className="mt-2 text-sm">{category.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default CategoriesPage;
