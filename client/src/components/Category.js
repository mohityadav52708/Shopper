import React, { useState } from 'react';
import '../css/category.css';
import Navbar from './Navbar';
import Cart from '../screens/Cart';
import ProductCart from './ProductCart';
const Category = ({ onCategoryClick }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const categories = [
    {
      name: 'Men',
    },
    {
      name: 'Women',
    },
    {
      name: 'Children',
    },
    {
      name: 'Grocery',
    },
    {
      name: 'Makeup',
    },
  ];
  return (
    <>
    <Navbar/>
    <ProductCart/>
    {/* <h1>Hello </h1> */}
    <section className="cart-section">
      <div className="category-container">
        {categories.map((category, index) => (
          <div className="category" key={index} onClick={() => handleCategoryClick(category.name)}>
            <h2>{category.name}</h2>
            
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default Category;
