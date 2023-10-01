import React from 'react'
import "../style/Product.scss";
const Product = ({ data,currentCategory}) => {
  return (
    <div className="product">
      <h3>Product List- {currentCategory}</h3>
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
          {data.map((product) => (
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