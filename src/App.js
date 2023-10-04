import Navi from "./component/Navi"
import Categories from "./component/Categories"
import Product from "./component/Product"
import Form from "./component/Form"

import '../src/style/app.scss';

import { useEffect, useState } from "react";


function App() {

  const [products, setProducts] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
 

  const addNewProduct = (newProduct) => {
    setProducts(prevProducts => [...prevProducts, newProduct]);
  }


  const getProduct = async () => {
    let url = " http://localhost:3005/products";
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
  }
  useEffect(() => {
    getProduct()
  }, [])

  const getCategories = async () => {
    let url = " http://localhost:3005/categories";
    const response = await fetch(url);
    const categories = await response.json();
    setCategoryList(categories);
  }
  useEffect(() => {
    getCategories()
  }, [])

  return (
    <>
      <Navi categoryList={categoryList} />

      <div className="container">
        <div className="sidebar" >

          <Categories categoryList={categoryList} />
          <Form addNewProduct={addNewProduct} product={products} />
        </div>
        <Product product={products} />
      </div>
    </>
  );
}

export default App;
