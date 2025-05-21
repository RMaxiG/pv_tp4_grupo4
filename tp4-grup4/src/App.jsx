import React, { useState } from 'react';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import './App.css';
import SearchBar from './components/SearchBar';

function App() {
  const ProductosIniciales = [
    { id: 1, descripcion: 'Procesador Ryzen 5 5600G', precioUnitario: 250000, descuento: 0, precioConDescuento: 250000 , stock: 5 },
    { id: 2, descripcion: 'Tarjeta Gráfica RTX 3060', precioUnitario: 400000, descuento: 10, precioConDescuento: 360000 , stock: 3 },
    { id: 3, descripcion: 'Memoria RAM 16GB DDR4', precioUnitario: 80000, descuento: 5, precioConDescuento: 76000 , stock: 10 },
  ];
  const [Tproductos, setTproductos] = useState(ProductosIniciales); 
  const [products, setProducts] = useState(ProductosIniciales);    
  const [editarProductos, seteditarProductos] = useState(null);    
  const [sigID, setsigID] = useState(ProductosIniciales.length + 1); 

  const handleAddProduct = (newProduct) => {
    const nuevoProducto = { ...newProduct, id: sigID };
    setTproductos([...Tproductos, nuevoProducto]);
    setProducts([...products, nuevoProducto]);
    setsigID(sigID + 1);
  };

  const handleUpdateProduct = (updatedProduct) => {
    const updatedTproductos = Tproductos.map((product) =>
      product.id === updatedProduct.id ? { ...updatedProduct, precioConDescuento: updatedProduct.precioUnitario * (1 - (updatedProduct.descuento || 0) / 100) } : product
    );
    setTproductos(updatedTproductos);
    setProducts(updatedTproductos);
    seteditarProductos(null); 
  };

  const handleEditProduct = (product) => {
    seteditarProductos(product); 
  };

  const handleDeleteProduct = (idToDelete) => {
    const updatedTproductos = Tproductos.filter(product => product.id !== idToDelete);
    setTproductos(updatedTproductos);
    setProducts(updatedTproductos); 
  };
  const handleSearch = (searchTerm) => {
    const filtradoProductos = Tproductos.filter(product =>
      product.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProducts(filtradoProductos);
  };



  return (
    <div className="app-container">
          <ProductForm
            onAddProduct={handleAddProduct}
            onUpdateProduct={handleUpdateProduct}
            initialProduct={editarProductos}
          />
        {editarProductos && (
          <button onClick={() => seteditarProductos(null)} className="cancel-button">
            Cancelar Edición
          </button>
        )}
        <h1><center>Inventario</center></h1>
          <ProductList
            products={products}
            onEditProduct={handleEditProduct}
            onDeleteProduct={handleDeleteProduct}
          />
          <SearchBar onSearch={handleSearch} />
    </div>
  );
}

export default App;