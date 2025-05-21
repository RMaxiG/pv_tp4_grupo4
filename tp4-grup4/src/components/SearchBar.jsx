import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <nav >
      <input
        type="text"
        placeholder="Buscar productos por descripcion..."
        value={searchTerm}
        onChange={handleChange}
      />
    </nav>
  );
};

export default SearchBar;