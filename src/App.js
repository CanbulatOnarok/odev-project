import Navi from "./component/Navi"
import Categories from "./component/Categories"
import Product from "./component/Product"
import Form from "./component/Form"
import axios from "axios";
import '../src/style/app.scss';
import { useEffect, useState } from "react";



function App() {

  const [products, setProducts] = useState([]);
  const [categoryList, setCategoryList] = useState([]);


  const addNewProduct = async (newProduct) => {
    // setProducts(prevProducts => [...prevProducts, newProduct]);
    let url = `http://localhost:3005/products`
    const response = await axios.post(url, newProduct);
    console.log(response);
    setProducts(prevProducts => [...prevProducts, newProduct]);
  }
  const deleteProduct = async (id) => {
    let url = `http://localhost:3005/products/${id}`
    const response = await axios.patch(url,{ isDeleted:true })
    console.log(response);
    if (response.status === 200)
      setProducts(prev => prev.filter(statedenGelen => statedenGelen.id !== id));
  }

  const getProduct = async () => {
    let url = "http://localhost:3005/products";
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
  }


  const getCategories = async () => {
    let url = " http://localhost:3005/categories";
    const response = await fetch(url);
    const categories = await response.json();
    setCategoryList(categories);
  }
  useEffect(() => {
    getProduct()
    getCategories()
  }, [])

  return (
    <>
      <Navi categoryList={categoryList} />

      <div className="container">
        <div className="sidebar" >

          <Categories categoryList={categoryList} />
          <Form addNewProduct={addNewProduct} product={products} categoryList={categoryList} />
        </div>
        <Product products={products} deleteProduct={deleteProduct} />
      </div>
    </>
  );
}

export default App;
