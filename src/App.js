import Navi from "./component/Navi"
import Product from "./component/Product"
import Form from "./component/Form"
import axios from "axios";
import '../src/style/app.scss';
import { useEffect, useState } from "react";



function App() {

  const [products, setProducts] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategoryID, setSelectedCategoryID] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);



  const addNewAndEditProduct = async (newProduct) => {
    let url = `http://localhost:3005/products`
    if (!selectedProduct) {
      const response = await axios.post(url, newProduct);
      if (response.status === 201) {
        setProducts(prevProducts => [...prevProducts, newProduct]);
      }
    }else {
      url += `/${selectedProduct.id}`;
      const response2 = await axios.put(url, newProduct);
      console.log(response2);
      setSelectedProduct(null);
    }
  };
  //silme
  const deleteProduct = async (id) => {
    let url = `http://localhost:3005/products/${id}`
    const response = await axios.patch(url, { isDeleted: true })
    if (response.status === 200)
      setProducts(prev => prev.filter(statedenGelen => statedenGelen.id !== id));
  }

  const getProduct = async () => {
    let url = "http://localhost:3005/products";
    if (selectedCategoryID && selectedCategoryID !== "All Products") {
      url += `?categoryId=${selectedCategoryID}`;
    }
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
  }


  const getCategories = async () => {
    let url = "http://localhost:3005/categories";
    const response = await axios.get(url);
    const categoryList = response.data;
    setCategoryList(categoryList);
  }

  // ürün düzenleme
  const editProduct = async (id) => {
    let url = `http://localhost:3005/products/${id}`
    const response = await axios.get(url);
    const arrengedProduct = response.data;
    setSelectedProduct(arrengedProduct);

  }

  useEffect(() => {
    getProduct();
    getCategories();
     //eslint-disable-next-line
  }, [selectedCategoryID, selectedProduct]);

  return (
    <>
      <Navi categoryList={categoryList} selectedCategory={selectedCategoryID} setSelectedCategory={setSelectedCategoryID} />

      <div className="container">
        <div className="sidebar" >
          <Form addNewAndEditProduct={addNewAndEditProduct} product={products} categoryList={categoryList}selectedProduct={selectedProduct} />
        </div>
        <Product products={products} deleteProduct={deleteProduct} editProduct={editProduct} />
      </div>
    </>
  );
}

export default App;
