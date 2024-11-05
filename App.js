import React from "react";
import ProductList from "./ProductList";

function App() {
  const products = [
    {
      name: "Product 1",
      price: 29.99,
      image:
        "https://img.freepik.com/free-psd/product-backdrop-psd-modern-style-with-marble-podium-gold-palm-leaf_53876-140457.jpg",
    },
    {
      name: "Product 2",
      price: 19.99,
      image:
        "https://img.freepik.com/free-vector/green-3d-stone-podium-cosmetic-product-display-platform-background-minimal-beauty-skincare-stand-with-plant-leaves-luxury-presentation-backdrop-premium-nature-spa-showcase-interior-with-rock_107791-21686.jpg",
    },
    {
      name: "Product 3",
      price: 39.99,
      image:
        "https://img.freepik.com/free-photo/luxury-3d-product-backdrop-rose-gold-with-orange-background_53876-105320.jpg",
    },
  ];

  return (
    <div>
      <h1>Product List</h1>
      <ProductList products={products} />
    </div>
  );
}

export default App;
