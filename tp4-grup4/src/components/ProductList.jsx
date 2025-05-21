import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ products, onEditProduct, onDeleteProduct }) => {
  return (
    <div>
      <h2>Lista de Productos</h2>
      {products.length > 0 ? (
        <ul>
          {products.map((product) => (
            <li key={product.id} style={{ display: 'flex', alignItems: 'center'}}>
              <ProductItem product={product} />
              <div style={{ marginLeft: '60px' }}>
                <button onClick={() => onEditProduct(product)}>Editar</button> <button onClick={() => onDeleteProduct(product.id)}>Eliminar</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay productos disponibles.</p>
      )}
    </div>
  );
};

export default ProductList;