import React, { useState, useEffect } from 'react';

function ProductForm({ onAddProduct, onUpdateProduct, initialProduct }) {
  const [descripcion, setDescripcion] = useState('');
  const [precioUnitario, setPrecioUnitario] = useState('');
  const [descuento, setDescuento] = useState('');
  const [stock, setStock] = useState('');

  useEffect(() => {
    if (initialProduct) {
      setDescripcion(initialProduct.descripcion);
      setPrecioUnitario(initialProduct.precioUnitario);
      setDescuento(initialProduct.descuento);
      setStock(initialProduct.stock);
    } else {
      setDescripcion('');
      setPrecioUnitario('');
      setDescuento('');
      setStock('');
    }
  }, [initialProduct]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!descripcion.trim() || precioUnitario === '' || stock === '') {
      alert('Por favor, ingresa la descripción, precio unitario y stock.');
      return;
    }

    const precio = parseFloat(precioUnitario);
    const desc = parseFloat(descuento) || 0;
    const nuevoProducto = {
      descripcion: descripcion,
      precioUnitario: precio,
      descuento: desc,
      precioConDescuento: precio * (1 - desc / 100),
      stock: parseInt(stock),
    };

    if (initialProduct && initialProduct.id) {
      onUpdateProduct({ ...nuevoProducto, id: initialProduct.id });
    } else {
      onAddProduct(nuevoProducto);
    }
    setDescripcion('');
    setPrecioUnitario('');
    setDescuento('');
    setStock('');
  };

  return (
    <div>
      <h2>{initialProduct ? 'Editar Producto' : 'Agregar Nuevo Producto'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="descripcion">Descripción:</label>
          <input
            type="text"
            id="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="precioUnitario">Precio Unitario:</label>
          <input
            type="number"
            id="precioUnitario"
            value={precioUnitario}
            onChange={(e) => setPrecioUnitario(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="descuento">Descuento (%):</label>
          <input
            type="number"
            id="descuento"
            value={descuento}
            onChange={(e) => setDescuento(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="stock">Stock:</label>
          <input
            type="number"
            id="stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </div>
        <br />
        <button type="submit">{initialProduct ? 'Guardar Cambios' : 'Agregar Producto'}</button>
      </form>
    </div>
  );
}

ProductForm.defaultProps = {
  initialProduct: null,
};

export default ProductForm;