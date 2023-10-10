import React, { useEffect } from 'react'
import "../style/form.scss"
import { useState } from 'react'


const Form = ({ product, addNewAndEditProduct, categoryList,selectedProduct }) => {

    const [productName, setProductName] = useState("");
    const [quantityPerUnit, setQuantityPerUnit] = useState("");
    const [unitPrice, setUnitPrice] = useState("");
    const [unitsInStock, setUnitsInStock] = useState("");
    const [productCategoryId, setProductCategoryId] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        addNewAndEditProduct({
            id: product.length + 1,
            productCategoryId: productCategoryId,
            productName: productName,
            quantityPerUnit: quantityPerUnit,
            unitPrice: unitPrice,
            unitsInStock: unitsInStock
        });


        setProductName("");
        setQuantityPerUnit("");
        setUnitPrice("");
        setUnitsInStock("");
        setProductCategoryId("Select Category");
    }
    useEffect(()=>{
        if(selectedProduct){
            setProductName(selectedProduct.productName)
            setQuantityPerUnit(selectedProduct.quantityPerUnit)
            setUnitPrice(selectedProduct.unitPrice)
            setUnitsInStock(selectedProduct.unitsInStock)
        }
       },[selectedProduct])
    return (
        <main>
            <form onSubmit={handleSubmit} className='product-form'>
                <h3>Add Product</h3>
                <select value={productCategoryId} onChange={e => setProductCategoryId(e.target.value)} required>
                    <option value={""} >Select Category</option>
                    {categoryList.map(category => (
                        <option value={category.id} key={category.id} >{category.categoryName}</option>
                    ))}
                </select>
                <div className="input-area">
                    <input value={productName} type="text" placeholder='Product Name:' onChange={e => setProductName(e.target.value)} required />
                </div>
                <div className="input-area">
                    <input value={quantityPerUnit} type="text" placeholder='Quantity Per Unit:' onChange={e => setQuantityPerUnit(e.target.value)} required />
                </div>
                <div className="input-area">
                    <input value={unitPrice} type="number" placeholder='Unit Price:' onChange={e => setUnitPrice(e.target.value)} required />
                </div>
                <div className="input-area">
                    <input value={unitsInStock} type="number" placeholder='Units In Stock:' onChange={e => setUnitsInStock(e.target.value)} required />
                </div>
                <input disabled={
                    productCategoryId === "Select Category" ||
                    !productName||
                    !quantityPerUnit ||
                    !unitPrice ||
                    !unitsInStock
                } type="submit" value={selectedProduct ? "Edit" : "Save"} />
            </form>

        </main >

    )
}

export default Form