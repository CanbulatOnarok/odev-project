import Navi from "./component/Navi"
import Categories from "./component/Categories"
import Product from "./component/Product"
import Input from "./component/Input"

import '../src/style/app.scss';
import data from "./data/data";
import { useState } from "react";


function App() {
  /* Prop area */
  const [product, setProduct] = useState(data.products);
  const [categories, setCategories] = useState(data.categories);

  const newProduct = (newProdcts) => {
    setProduct(prev => [...prev, newProdcts])
  }
  const [currentCategory, setCurrentCategory] = useState("");



  return (
    <>
      <Navi data={categories} />
      <Input newProduct={newProduct} />
      <div className="container">
        <Categories setCurrentCategory={setCurrentCategory} data={categories} />
        <Product data={product} currentCategory={currentCategory} />
      </div>

    </>
  );
}

export default App;
