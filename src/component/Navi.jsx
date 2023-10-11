// Navi.js içinde
import React from 'react';
import "../style/Navi.scss";
import Logo from "../image/ürünler.png"

const Navi = ({ categoryList, setSelectedCategory, selectedCategory }) => {

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  }

  return (
    <nav>
      <div className="logo">
        <img src={Logo} alt="" />
        <h1>Onarok Company</h1>
      </div>
      <ul>
        {categoryList.map(category => (
          ((selectedCategory && selectedCategory !== "All Products") || category.categoryName !== "All Products") &&
          <li key={category.id} onClick={() => handleCategoryClick(category.id)}>{category.categoryName}</li>
        ))}
      </ul>
    </nav>
  )
}

export default Navi;
