import React from 'react'
import "../style/input.scss"
import { useState } from 'react'


const Input = ({ newProducts }) => {
    // "id": 1,
    // "categoryId": 2,
    // "productName": "Chai",
    // "quantityPerUnit": "48 - 6 oz jars",
    // "unitPrice": "24",
    // "unitsInStock": 53,
    // "isDeleted": true
    const [productName, setProductName] = useState("");
    const [productQuantity, setProductQuantity] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productStock, setProductStock] = useState("");
    const[productCategoryId,setProductCategoryId] =useState("");


    const handleSubmit = (event) => ({
        id: newProducts.length + 1,
        productCategoryId:productCategoryId,
        productName: productName,
        quantityPerUnit: productQuantity,
        unitPrice: productPrice,
        unitsInStock: productStock,
        isDeleted: true,
    })

    return (
        <main>
            <form onSubmit={handleSubmit} className='product-form'>
                <div className="input-area">
                    <input value={productName} type="text" placeholder='Product Name:' onChange={e => setProductCategoryId(e.target.value)} />
                </div>
                <div className="input-area">
                    <input value={productCategoryId} type="number" placeholder='Category Id:' onChange={e => setProductName(e.target.value)} />
                </div>
                
                <div className="input-area">
                    <input value={productQuantity} type="text" placeholder='Quantity Per Unit:' onChange={e => setProductQuantity(e.target.value)} />
                </div>
                <div className="input-area">
                    <input value={productPrice} type="number" placeholder='Unit Price:' onChange={e => setProductPrice(e.target.value)} />
                </div>
                <div className="input-area">
                    <input value={productStock} type="number" placeholder='Units In Stock:' onChange={e => setProductStock(e.target.value)} />
                </div>
                <input disabled={
                    !productName.trim() || !productQuantity.trim() || !productPrice.trim() || !productStock.trim()
                } type='submit' value="Save"
                />
            </form>
            <div className="product-card">
                <p>{productName}</p>
                <p>{productQuantity}</p>
                <p>{productPrice}</p>
                <p>{productStock}</p>
            </div>
        </main >

    )
}

export default Input