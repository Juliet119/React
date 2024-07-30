
import React from 'react';
import Product from './Product';
import '../App.css';


const Home = () => {
  const products = [
    {
    name: 'Computer',
    image: 'https://via.placeholder.com/150',
    description: 'This is a sample product description for computer.',
    price: 29.99,
    quantity: 10,
  },
  {
    name: 'LGTV',
    image: 'https://via.placeholder.com/150',
    description: 'This is a sample product description for LGTV.',
    price: 49.99,
    quantity: 5,
  },
  {
    name: 'Printer',
    image: 'https://via.placeholder.com/150',
    description: 'This is a sample product description for printer.',
    price: 19.99,
    quantity: 20,
  }

  ];
    

  return (
    <div>
      <h1>Home Components</h1>
      {products.map((product, index) => (
        <Product
        key={index}
        name={product.name}
        image={product.image}
        description={product.description}
        price={product.price}
        quantity={product.quantity}
        />

      ))}  
    </div>
  );
};

export default Home;
