import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 mt-16 sm:mt-24">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-16 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          <div className="pb-6">
            <Link href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Shop</Link>
          </div>
          <div className="pb-6">
            <Link href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Company</Link>
          </div>
          <div className="pb-6">
            <Link href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Blog</Link>
          </div>
          <div className="pb-6">
            <Link href="#" className="text-sm leading-6 text-gray-300 hover:text-white">Contact</Link>
          </div>
        </nav>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; 2024 Abisrose, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
