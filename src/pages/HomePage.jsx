import React, { useState } from 'react';

export const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const productsMock = [
    { id: 1, title: 'Producto 1', description: 'Descripción corta del producto 1', rating: 4.5, reviews: 10 },
    { id: 2, title: 'Producto 2', description: 'Descripción corta del producto 2', rating: 3.8, reviews: 5 },
    // más productos...
  ];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Buscar productos:', searchTerm);
    // Aquí implementarías la lógica para buscar productos basados en `searchTerm`.
  };

  return (
    <div>
      <h1>Home Page</h1>
      <form onSubmit={handleSearchSubmit}>
        <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Buscar productos..." />
        <button type="submit">Buscar</button>
      </form>
      <div>
        {productsMock.map(product => (
          <div key={product.id}>
            <h2><a href={`/product/${product.id}`}>{product.title}</a></h2>
            <p>{product.description}</p>
            <p>Calificación: {product.rating} ({product.reviews} reseñas)</p>
          </div>
        ))}
      </div>
    </div>
  );
};