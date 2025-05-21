import React from 'react';

const ProductItem = ({ product }) => {
  return (
    <div>
      <strong><u> {product.descripcion} </u> </strong>
      <p>ID: {product.id}</p>
      <p>Precio Unitario: ${product.precioUnitario.toFixed(2)}</p>
      {product.descuento > 0 && (
        <p>Descuento: {product.descuento}%</p>
      )}
      <p>Precio con Descuento: ${product.precioConDescuento.toFixed(2)}</p>
      <p>Stock: {product.stock}</p>
    </div>
  );
};

export default ProductItem;