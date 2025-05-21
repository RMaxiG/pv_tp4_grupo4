import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <nav style={{
      padding: '10px',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    }}>
      <input
        type="text"
        placeholder="Buscar productos por descripcion..."
        value={searchTerm}
        onChange={handleChange}
        style={{
          padding: '8px',
          borderRadius: '7px',
          border: '2px solid #01f958',
          width: '80%',
          maxWidth: '600px',
        }}
      />
    </nav>
  );
};

export default SearchBar;