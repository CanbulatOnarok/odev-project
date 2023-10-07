import React from 'react'
import "../style/Product.scss";
import {BsGear} from 'react-icons/bs';

const Product = ({ products,deleteProduct}) => {

  
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
          {products.map((product) => (
            !product.isDeleted && 
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.productName}</td>
              <td>{product.quantityPerUnit}</td>
              <td>{product.unitPrice}</td>
              <td>{product.unitsInStock}</td>
              <button className='delete' onClick={()=>deleteProduct(product.id)}><BsGear/></button>
              
              
            </tr>
          )).reverse()}
        </tbody>
      </table>
    </div>
  );
}

export default Product;