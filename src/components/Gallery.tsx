import React from 'react';
import { MenuItem } from '../types';
import { ImageOff } from 'lucide-react';

interface GalleryProps {
  items: MenuItem[];
}

export const Gallery: React.FC<GalleryProps> = ({ items }) => {
  return (
    <section className="py-16 bg-white rounded-xl shadow-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Delicious Offerings</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated selection of dishes, crafted with passion and the finest ingredients
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.id} className="relative group rounded-xl overflow-hidden">
              <div className="w-full h-72">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                    <ImageOff className="w-12 h-12 text-gray-400" />
                  </div>
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="text-white p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold">{item.name}</h3>
                    <span className="text-accent-400 font-semibold">${item.price.toFixed(2)}</span>
                  </div>
                  <p className="text-sm text-gray-200">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};