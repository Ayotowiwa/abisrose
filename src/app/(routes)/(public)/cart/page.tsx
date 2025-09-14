/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import DefaultLayout from '@/components/layouts/default-layout';
import Image from 'next/image';

const cartItems = [
  {
    id: 101,
    name: 'Classic White Shirt',
    price: 39.99,
    imageUrl: 'https://placehold.co/400x400/cccccc/333333?text=Shirt',
    category: 'Apparel',
    description: 'A timeless white shirt perfect for any occasion.',
    comparePrice: 50.00,
    qty: 1,
  },
  {
    id: 102,
    name: 'Leather Crossbody Bag',
    price: 129.99,
    imageUrl: 'https://placehold.co/400x400/966F33/ffffff?text=Bag',
    category: 'Accessories',
    description: 'A sleek and stylish leather bag with adjustable strap.',
    comparePrice: 150.00,
    qty: 1,
  },
];

const CartPage = () => {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * (item.qty || 1), 0);
  const tax = subtotal * 0.05; // 5% tax as a placeholder
  const shipping = 5.00; // Flat shipping fee as a placeholder
  const total = subtotal + tax + shipping;

  return (
    <DefaultLayout>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl text-center mb-12">
          Your Shopping Cart
        </h1>

        {cartItems.length > 0 ? (
          <div className="lg:grid lg:grid-cols-3 lg:gap-x-12">
            <div className="lg:col-span-2">
              <ul role="list" className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <li key={item.id} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <Image
                        width={96}
                        height={96}
                        src={item.imageUrl}
                        alt={item.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <a href={`/shop/products/${item.id}`}>{item.name}</a>
                          </h3>
                          <p className="ml-4">${(item.price * (item.qty || 1)).toFixed(2)}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-gray-500">Qty {item.qty}</p>
                        <div className="flex">
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Order Summary */}
            <div className="mt-8 lg:col-span-1 lg:mt-0">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-bold tracking-tight text-gray-900">Order Summary</h2>
                <div className="mt-6">
                  <div className="flex justify-between py-2 border-b border-gray-200 text-gray-600">
                    <p>Subtotal</p>
                    <p>${subtotal.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200 text-gray-600">
                    <p>Tax</p>
                    <p>${tax.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200 text-gray-600">
                    <p>Shipping</p>
                    <p>${shipping.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between py-4 text-lg font-bold text-gray-900">
                    <p>Order Total</p>
                    <p>${total.toFixed(2)}</p>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <a
                    href="/shop/checkout"
                    className="w-full flex justify-center items-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                  >
                    Proceed to Checkout
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-lg text-gray-600 mb-8">
              Looks like you haven't added anything to your cart yet.
            </p>
            <a
              href="/shop"
              className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Start Shopping
            </a>
          </div>
        )}
      </div>
    </DefaultLayout>
  );
};

export default CartPage;
