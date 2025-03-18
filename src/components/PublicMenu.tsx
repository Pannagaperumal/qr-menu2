import React, { useState } from 'react';
import { Utensils, Clock, MapPin, Phone } from 'lucide-react';
import { CategoryCard } from './CategoryCard';
import { MenuItem } from './MenuItem';
import { Gallery } from './Gallery';
import menuData from '../data/menu.json';

export function PublicMenu() {
  const [selectedCategory, setSelectedCategory] = useState(menuData.categories[0].id);

  const filteredItems = menuData.menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-primary-200">
      {/* Hero Header */}
      <header className="bg-white shadow-lg sticky top-0 z-20">
        <div className="absolute inset-0 bg-primary-500 opacity-5 pattern-diagonal-lines"></div>
        <div className="container mx-auto px-4 py-4 md:py-8">
<div className="flex flex-col items-center justify-center gap-2 md:gap-4">
  <h1 className="text-3xl md:text-5xl font-bold text-gray-900 text-center">
    {menuData.restaurant.name}
  </h1>
  <div className="flex items-center gap-2 text-sm text-gray-600">
    <MapPin className="w-4 h-4 text-primary-600" />
    <span className="text-black">{menuData.restaurant.address}</span>
  </div>
</div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Categories */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Menu Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {menuData.categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                isActive={category.id === selectedCategory}
                onClick={() => setSelectedCategory(category.id)}
              />
            ))}
          </div>
        </div>

        {/* Selected Category Title */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-900">
            {menuData.categories.find(c => c.id === selectedCategory)?.name}
          </h2>
          <span className="text-gray-500">₹
            {filteredItems.length} items
          </span>
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredItems.map((item) => (
            <MenuItem key={item.id} item={{ ...item, price: `₹${item.price}` }} />
          ))}
        </div>

        {/* Gallery Section */}
        <Gallery items={menuData.menuItems} />
      </main>

      {/* Footer */}
      <footer className="bg-primary-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <div className="inline-block bg-primary-800/50 p-3 rounded-full">
              <Utensils className="w-8 h-8 text-accent-400" />
            </div>
            <h2 className="text-3xl font-bold">{menuData.restaurant.name}</h2>
            <div className="max-w-md mx-auto space-y-2 text-primary-100">
              <p>{menuData.restaurant.description}</p>
              <p>{menuData.restaurant.address}</p>
              <p>{menuData.restaurant.openingHours}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
