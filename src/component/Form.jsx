import React from 'react'
import "../style/form.scss"
import { useState } from 'react'


const Form = ({ product, addNewProduct, categoryList }) => {
   
    const [productName, setProductName] = useState("");
    const [productQuantity, setProductQuantity] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productStock, setProductStock] = useState("");
    const [productCategoryId, setProductCategoryId] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        addNewProduct({
            id: product.length + 1,
            productCategoryId: productCategoryId,
            productName: productName,
            quantityPerUnit: productQuantity,
            unitPrice: productPrice,
            unitsInStock: productStock,
            isDeleted: true,
        });


        setProductName("");
        setProductQuantity("");
        setProductPrice("");
        setProductStock("");
        setProductCategoryId("");
    }
    return (
        <main>
            <form onSubmit={handleSubmit} className='product-form'>
                <h3>Add Product</h3>
                <select value={productCategoryId} onChange={e => setProductCategoryId(e.target.value)} required>
                    <option value={""} >Select Category Id</option>
                    { categoryList.map(category =>(
                            <option value={category.id} key={category.id} >{category.categoryName}</option>
                        ))}
                </select>
                <div className="input-area">
                    <input value={productName} type="text" placeholder='Product Name:' onChange={e => setProductName(e.target.value)}required />
                </div>
                <div className="input-area">
                    <input value={productQuantity} type="text" placeholder='Quantity Per Unit:' onChange={e => setProductQuantity(e.target.value)} required/>
                </div>
                <div className="input-area">
                    <input value={productPrice} type="number" placeholder='Unit Price:' onChange={e => setProductPrice(e.target.value)}required />
                </div>
                <div className="input-area">
                    <input value={productStock} type="number" placeholder='Units In Stock:' onChange={e => setProductStock(e.target.value)}required />
                </div>
                <input type='submit' value="Save Product"
                />
            </form>
            <div className="product-card">
                <p>Category Id:{productCategoryId}</p>
                <p>Product Name:{productName}</p>
                <p>Quantity Per Unit:{productQuantity}</p>
                <p>Unit Price:{productPrice}</p>
                <p>Unit In Stock:{productStock}</p>
            </div>
        </main >

    )
}

export default Form