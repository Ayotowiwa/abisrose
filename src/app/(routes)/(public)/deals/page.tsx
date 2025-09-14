/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import DefaultLayout from '../../../../components/layouts/default-layout';
import ProductCard from '../../../../components/product/product-card';

const deals = [
  { id: 101, name: '40% Off: Summer Collection', price: 59.99, imageUrl: 'https://placehold.co/400x400/3498db/ffffff?text=Summer', category: 'Apparel', description: 'Get ready for the sun with our exclusive summer collection deals.', comparePrice: 99.99 },
  { id: 102, name: 'Limited Time: Electronics', price: 149.99, imageUrl: 'https://placehold.co/400x400/2ecc71/ffffff?text=Gadgets', category: 'Electronics', description: 'Powerful tech at unbeatable prices for a limited time.', comparePrice: 249.99 },
  { id: 103, name: 'Flash Sale: Home Decor', price: 29.99, imageUrl: 'https://placehold.co/400x400/e74c3c/ffffff?text=Home', category: 'Homeware', description: 'Spruce up your living space with our flash sale on home decor.', comparePrice: 49.99 },
  { id: 104, name: 'Last Chance: Winter Gear', price: 79.99, imageUrl: 'https://placehold.co/400x400/9b59b6/ffffff?text=Winter', category: 'Apparel', description: 'Grab your cozy winter essentials before they are gone forever!', comparePrice: 129.99 },
  { id: 105, name: 'Daily Deal: Cookware Set', price: 119.99, imageUrl: 'https://placehold.co/400x400/f1c40f/ffffff?text=Kitchen', category: 'Homeware', description: 'The perfect cookware set to elevate your culinary skills.', comparePrice: 199.99 },
  { id: 106, name: 'Exclusive: Footwear', price: 89.99, imageUrl: 'https://placehold.co/400x400/1abc9c/ffffff?text=Shoes', category: 'Footwear', description: 'Discover comfort and style with our exclusive footwear deals.', comparePrice: 149.99 },
];

const DealsPage = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Today's Top Deals
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Don't miss out! Get incredible discounts on your favorite products for a limited time.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {deals.map((deal) => (
            <ProductCard key={deal.id} product={deal} />
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default DealsPage;
