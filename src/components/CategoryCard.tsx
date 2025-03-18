import React from 'react';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
  isActive: boolean;
  onClick: () => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center gap-2 p-4 rounded-xl transition-all transform hover:scale-105 min-w-[120px] ${
        isActive
          ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30'
          : 'bg-white text-gray-700 hover:bg-primary-50 border border-gray-100'
      }`}
    >
      <h3 className="font-medium whitespace-nowrap">{category.name}</h3>
      <p className="text-xs opacity-80 text-center line-clamp-2">{category.description}</p>
    </button>
  );
};