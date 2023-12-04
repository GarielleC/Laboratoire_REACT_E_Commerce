import React, { useState } from 'react';

const Product = ({ id, name, onToggleFavorite }) => {
  return (
    <div>
      <p>{name}</p>
      <button onClick={() => onToggleFavorite(id)}>
        {onToggleFavorite && onToggleFavorite.includes(id) ? '❤️' : '🤍'}
      </button>
    </div>
  );
};

const ProductList = () => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (productId) => {
    const updatedFavorites = favorites.includes(productId)
      ? favorites.filter((id) => id !== productId)
      : [...favorites, productId];
    setFavorites(updatedFavorites);
  };

  const products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
  ];

  return (
    <div>
      <h1>Product List</h1>
      {products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          onToggleFavorite={favorites}
        />
      ))}
      <h2>Favorites</h2>
      {favorites.length > 0 ? (
        <ul>
          {favorites.map((id) => (
            <li key={id}>{`Product ${id} ❤️`}</li>
          ))}
        </ul>
      ) : (
        <p>No favorites yet.</p>
      )}
    </div>
  );
};

export default ProductList;
