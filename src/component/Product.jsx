import React from 'react'
import "../style/Product.scss";
const Product = ({ product}) => {

  return (
    
    <div className="product">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Product Name</th>
            <th>Quantity Per Unit</th>
            <th>Unit Price</th>
            <th>Units In Stock</th>
          </tr>
        </thead>
        <tbody>
          {product.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.productName}</td>
              <td>{product.quantityPerUnit}</td>
              <td>{product.unitPrice}</td>
              <td>{product.unitsInStock}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Product;