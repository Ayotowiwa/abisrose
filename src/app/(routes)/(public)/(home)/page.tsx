import React from 'react';
import ProductCard from '../../../../components/product/product-card';
import DefaultLayout from '../../../../components/layouts/default-layout';
import { Product } from '../../../../lib/types';
import Image from 'next/image';

// Dummy data for featured and new products
const featuredProducts: Product[] = [
  { id: 1, name: 'Minimalist Tote Bag', price: 110.00, imageUrl: 'https://placehold.co/400x400/22c55e/d1d5db?text=Tote', category: 'Bags', description: 'A timeless tote for your daily essentials.' },
  { id: 2, name: 'Handcrafted Ceramic Mug', price: 35.00, imageUrl: 'https://placehold.co/400x400/f59e0b/d1d5db?text=Mug', category: 'Homeware', description: 'Artisan crafted mug for your favorite brew.' },
  { id: 3, name: 'Sustainable Cotton Hoodie', price: 95.00, imageUrl: 'https://placehold.co/400x400/3b82f6/d1d5db?text=Hoodie', category: 'Apparel', description: 'Eco-friendly comfort in every thread.' },
];

const newArrivals: Product[] = [
  { id: 4, name: 'Scented Soy Candle', price: 25.00, imageUrl: 'https://placehold.co/400x400/94a3b8/d1d5db?text=Candle', category: 'Homeware', description: 'Calming aroma for a serene atmosphere.' },
  { id: 5, name: 'Premium Leather Journal', price: 65.00, imageUrl: 'https://placehold.co/400x400/14b8a6/d1d5db?text=Journal', category: 'Stationery', description: 'Capture your thoughts in a journal that lasts.' },
  { id: 6, name: 'Vintage-style Watch', price: 150.00, imageUrl: 'https://placehold.co/400x400/8b5cf6/d1d5db?text=Watch', category: 'Accessories', description: 'Classic design meets modern precision.' },
  { id: 7, name: 'Hand-dyed Silk Scarf', price: 50.00, imageUrl: 'https://placehold.co/400x400/ef4444/d1d5db?text=Scarf', category: 'Accessories', description: 'An elegant accessory to complement any outfit.' },
  { id: 8, name: 'Art Print Poster', price: 40.00, imageUrl: 'https://placehold.co/400x400/eab308/d1d5db?text=Art+Print', category: 'Decor', description: 'Brighten your space with unique, high-quality art.' },
];

const testimonials = [
  {
    text: "Abisrose is my go-to for unique, high-quality items. The hoodie I bought is incredibly soft and stylish!",
    author: "Jane D., New York"
  },
  {
    text: "I'm so impressed with the ethical sourcing. It feels good to shop from a brand that cares about its impact.",
    author: "Mark S., London"
  },
  {
    text: "The shipping was fast, and the product was exactly as described. The tote bag is even better in person!",
    author: "Sarah L., Sydney"
  }
];

const HomePage = () => {
  return (
    <DefaultLayout>
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
          <Image
            loading='lazy'
            width={2940}
            height={960}
            src="https://images.unsplash.com/photo-1542456073-10e8f773426e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Hero background, woman shopping"
            className="absolute inset-0 -z-10 h-full w-full object-cover object-center brightness-50"
          />
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center text-white relative z-10">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
              Elevate Your Everyday Style
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-200 max-w-xl mx-auto">
              Discover unique, handcrafted goods that are ethically sourced and designed to last. From fashion to home, find pieces that tell a story.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="/shop" className="rounded-full bg-white px-8 py-4 text-base font-semibold text-gray-900 shadow-lg hover:bg-gray-100 transition-colors">
                Explore The Collection
              </a>
            </div>
          </div>
        </div>

        {/* --- */}
        {/* Why Abisrose Section */}
        <section className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                The Abisrose Difference
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                We are more than a store. We are a community built on a commitment to quality, craftsmanship, and a better world.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm">
                <div className="bg-indigo-500 rounded-full p-3 inline-flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">Ethically Sourced</h3>
                <p className="mt-2 text-base text-gray-600">
                  Every product is sourced from trusted partners who ensure fair labor practices and sustainable materials.
                </p>
              </div>
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm">
                <div className="bg-indigo-500 rounded-full p-3 inline-flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9.825 15.955C10.04 16.894 11.235 17.067 11.648 16.147L20.657 5.146a2.25 2.25 0 00-3.182-3.182L10.657 8.818c-.92.413-.747 1.608.204 1.823l.051.012a6.375 6.375 0 016.353 3.66L15 17.5l-2.45-2.45a6.375 6.375 0 01-2.737-1.425zM12.75 14.25h1.5a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">Handcrafted Quality</h3>
                <p className="mt-2 text-base text-gray-600">
                  We champion the artistry of skilled creators, offering products with a unique and personal touch.
                </p>
              </div>
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm">
                <div className="bg-indigo-500 rounded-full p-3 inline-flex items-center justify-center text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">Customer-Centric</h3>
                <p className="mt-2 text-base text-gray-600">
                  Your satisfaction is our top priority. We&apos;re here to help, from product selection to post-purchase support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- */}
        {/* Featured Products Section */}
        <section id="featured-products" className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="md:flex md:items-center md:justify-between">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Featured Products</h2>
              <a href="/shop" className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block">
                View all products
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="mt-8 md:hidden text-center">
              <a href="/shop" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                View all products
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        </section>

        {/* --- */}
        {/* Testimonials Section */}
        <section className="bg-gray-50 py-16 sm:py-24">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                What Our Customers Say
              </h2>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl">
                  <p className="text-lg text-gray-700 italic">&quot;{testimonial.text}&quot;</p>
                  <p className="mt-4 text-base font-semibold text-gray-900">- {testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- */}
        {/* New Arrivals Section */}
        <section className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="md:flex md:items-center md:justify-between">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">New Arrivals</h2>
              <a href="/shop?sort=new" className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block">
                Discover more
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {newArrivals.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="mt-8 md:hidden text-center">
              <a href="/shop?sort=new" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                Discover more
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </DefaultLayout>
  );
};

export default HomePage;
