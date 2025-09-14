import React from 'react';
import { Product } from '@/lib/types';
import Image from 'next/image';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Image
                    loading='lazy'
                    width={400}
                    height={400}
                    src={product.imageUrl}
                    alt={product.name}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
            </div>
            <div className="p-4 bg-white">
                <div className="flex justify-between items-center">
                    <h3 className="text-sm text-gray-700">
                        <a href={`/shop/products/${product.id}`}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {product.name}
                        </a>
                    </h3>
                    <p className="text-sm font-medium text-gray-900">${product.price.toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
