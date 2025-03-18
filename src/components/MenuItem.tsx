import React from 'react';
import { ImageOff } from 'lucide-react';

interface MenuItemProps {
  item: {
    id: string;
    name: string;
    description: string;
    price: string;
    image?: string;
    category: string;
  };
}

export const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-48">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <ImageOff className="w-8 h-8 text-gray-400" />
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
          <span className="text-primary-600 font-semibold">
            {item.price}
          </span>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
      </div>
    </div>
  );
};
