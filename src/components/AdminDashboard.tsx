import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { PlusCircle, Trash2, Save, Search, Upload, X } from 'lucide-react';
import menuData from '../data/menu.json';

export const AdminDashboard: React.FC = () => {
  const [categories, setCategories] = useState(menuData.categories);
  const [menuItems, setMenuItems] = useState(menuData.menuItems);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingItem, setEditingItem] = useState<any | null>(null);
  const [newCategory, setNewCategory] = useState({ name: '', description: '' });
  const [newMenuItem, setNewMenuItem] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
    category: '',
  });

  const handleAddCategory = () => {
    const newCategoryItem = {
      id: Date.now().toString(),
      ...newCategory
    };
    setCategories([...categories, newCategoryItem]);
    setNewCategory({ name: '', description: '' });
    toast.success('Category added successfully');
  };

  const handleAddMenuItem = () => {
    const newItem = {
      id: Date.now().toString(),
      name: newMenuItem.name,
      description: newMenuItem.description,
      price: parseFloat(newMenuItem.price),
      image: newMenuItem.image,
      category: newMenuItem.category,
    };
    setMenuItems([...menuItems, newItem]);
    setNewMenuItem({
      name: '',
      description: '',
      price: '',
      image: '',
      category: '',
    });
    toast.success('Menu item added successfully');
  };

  const handleUpdateMenuItem = (item: any) => {
    const updatedItems = menuItems.map(menuItem => 
      menuItem.id === item.id ? item : menuItem
    );
    setMenuItems(updatedItems);
    setEditingItem(null);
    toast.success('Menu item updated successfully');
  };

  const handleDeleteCategory = (id: string) => {
    setCategories(categories.filter(category => category.id !== id));
    toast.success('Category deleted successfully');
  };

  const handleDeleteMenuItem = (id: string) => {
    setMenuItems(menuItems.filter(item => item.id !== id));
    toast.success('Menu item deleted successfully');
  };

  const filteredMenuItems = menuItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Categories Management */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-6">Manage Categories</h2>
            
            <div className="space-y-4 mb-8">
              <input
                type="text"
                placeholder="Category Name"
                value={newCategory.name}
                onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg"
              />
              <input
                type="text"
                placeholder="Category Description"
                value={newCategory.description}
                onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg"
              />
              <button
                onClick={handleAddCategory}
                className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
              >
                <PlusCircle className="w-4 h-4" />
                Add Category
              </button>
            </div>

            <div className="space-y-4">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-medium">{category.name}</h3>
                    <p className="text-sm text-gray-600">{category.description}</p>
                  </div>
                  <button
                    onClick={() => handleDeleteCategory(category.id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Menu Items Management */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-6">Manage Menu Items</h2>
            
            {/* Search */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search menu items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg"
              />
            </div>

            {/* Add/Edit Form */}
            <div className="space-y-4 mb-8">
              <input
                type="text"
                placeholder="Item Name"
                value={editingItem ? editingItem.name : newMenuItem.name}
                onChange={(e) => editingItem 
                  ? setEditingItem({ ...editingItem, name: e.target.value })
                  : setNewMenuItem({ ...newMenuItem, name: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-lg"
              />
              <textarea
                placeholder="Item Description"
                value={editingItem ? editingItem.description : newMenuItem.description}
                onChange={(e) => editingItem
                  ? setEditingItem({ ...editingItem, description: e.target.value })
                  : setNewMenuItem({ ...newMenuItem, description: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-lg"
              />
              <input
                type="number"
                placeholder="Price"
                value={editingItem ? editingItem.price : newMenuItem.price}
                onChange={(e) => editingItem
                  ? setEditingItem({ ...editingItem, price: parseFloat(e.target.value) })
                  : setNewMenuItem({ ...newMenuItem, price: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-lg"
              />
              <select
                value={editingItem ? editingItem.category : newMenuItem.category}
                onChange={(e) => editingItem
                  ? setEditingItem({ ...editingItem, category: e.target.value })
                  : setNewMenuItem({ ...newMenuItem, category: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-lg"
              >
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              
              {/* Image URL Input */}
              <input
                type="text"
                placeholder="Image URL"
                value={editingItem ? editingItem.image : newMenuItem.image}
                onChange={(e) => editingItem
                  ? setEditingItem({ ...editingItem, image: e.target.value })
                  : setNewMenuItem({ ...newMenuItem, image: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-lg"
              />

              <button
                onClick={() => editingItem ? handleUpdateMenuItem(editingItem) : handleAddMenuItem()}
                className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
              >
                {editingItem ? <Save className="w-4 h-4" /> : <PlusCircle className="w-4 h-4" />}
                {editingItem ? 'Update Item' : 'Add Item'}
              </button>

              {editingItem && (
                <button
                  onClick={() => setEditingItem(null)}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                >
                  <X className="w-4 h-4" />
                  Cancel Edit
                </button>
              )}
            </div>

            {/* Menu Items List */}
            <div className="space-y-4">
              {filteredMenuItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-4">
                    {item.image && (
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                    )}
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setEditingItem(item)}
                      className="text-blue-500 hover:text-blue-600"
                    >
                      <Save className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDeleteMenuItem(item.id)}
                      className="text-red-500 hover:text-red-600"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};