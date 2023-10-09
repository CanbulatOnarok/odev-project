import React from 'react'
import "../style/Product.scss";
import { BsTrash3, BsGear } from 'react-icons/bs';

const Product = ({ products, deleteProduct, editProduct }) => {


  return (

    <div className="product">
      <table>
        <thead>
          <tr>
            <th style={{ background: "salmon", borderColor: "salmon" }}></th>
            <th>Id</th>
            <th>Product Name</th>
            <th>Quantity Per Unit</th>
            <th>Unit Price</th>
            <th>Units In Stock</th>
            <th style={{ background: "salmon", borderColor: "salmon" }}></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            !product.isDeleted &&
            (
              <tr key={product.id}>
                <td style={{ background: "salmon", borderColor: "salmon" }}> <button className='delete' onClick={() => deleteProduct(product.id)}><BsTrash3 /></button></td>
                <td>{product.id}</td>
                <td>{product.productName}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
                <td style={{ background: "salmon", borderColor: "salmon" }}> <button className='edit' onClick={() => editProduct(product.id)}><BsGear /></button></td>
              </tr>
            )
          )).reverse()}
        </tbody>
      </table>
    </div>
  );
}

export default Product;