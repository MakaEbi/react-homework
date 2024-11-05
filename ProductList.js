import React, { useState } from "react";

function ProductList({ products }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div>
      <h2>Available Products</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index} onClick={() => setSelectedProduct(product)}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100px" }}
            />
          </li>
        ))}
      </ul>

      {selectedProduct && (
        <div>
          <h2>Selected Product Details</h2>
          <h3>{selectedProduct.name}</h3>
          <p>Price: ${selectedProduct.price}</p>
          <img
            src={selectedProduct.image}
            alt={selectedProduct.name}
            style={{ width: "200px" }}
          />
        </div>
      )}
    </div>
  );
}

export default ProductList;
