import React from 'react';
import ProductCard from '@/components/product/product-card';
import DefaultLayout from '@/components/layouts/default-layout';

const allProducts = [
  { id: 1, name: 'Comfortable Jeans', price: 89.00, imageUrl: 'https://placehold.co/400x400/1e293b/d1d5db?text=Jeans', category: 'Apparel', description: '...' },
  { id: 2, name: 'Stylish Backpack', price: 45.00, imageUrl: 'https://placehold.co/400x400/1e293b/d1d5db?text=Backpack', category: 'Accessories', description: '...' },
  { id: 3, name: 'Running Sneakers', price: 120.00, imageUrl: 'https://placehold.co/400x400/1e293b/d1d5db?text=Sneakers', category: 'Footwear', description: '...' },
  { id: 4, name: 'Wireless Headphones', price: 199.00, imageUrl: 'https://placehold.co/400x400/1e293b/d1d5db?text=Headphones', category: 'Electronics', description: '...' },
  { id: 5, name: 'Leather Wallet', price: 55.00, imageUrl: 'https://placehold.co/400x400/1e293b/d1d5db?text=Wallet', category: 'Accessories', description: '...' },
  { id: 6, name: 'Hooded Sweatshirt', price: 75.00, imageUrl: 'https://placehold.co/400x400/1e293b/d1d5db?text=Sweatshirt', category: 'Apparel', description: '...' },
];

const ShopPage = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">All Products</h1>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {allProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ShopPage;
