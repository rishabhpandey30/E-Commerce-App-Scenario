import React from 'react';
import ProductCard from './ProductCard';

function App() {
  const product = { name: 'Wireless Mouse', price: 999 };

  return (
    <div>
      <ProductCard name={product.name} price={product.price} />
    </div>
  );
}

export default App;
