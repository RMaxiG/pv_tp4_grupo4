import React, { useState } from "react";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  const ProductosIniciales = [
    {
      id: 1,
      descripcion: "Procesador Ryzen 5 5600G",
      precioUnitario: 250000,
      descuento: 0,
      precioConDescuento: 250000,
      stock: 5,
    },
    {
      id: 2,
      descripcion: "Tarjeta Gráfica RTX 3060",
      precioUnitario: 400000,
      descuento: 10,
      precioConDescuento: 360000,
      stock: 3,
    },
    {
      id: 3,
      descripcion: "Memoria RAM 16GB DDR4",
      precioUnitario: 80000,
      descuento: 5,
      precioConDescuento: 76000,
      stock: 10,
    },
  ];
  const [products, setProducts] = useState(ProductosIniciales);

  return (
    <div>
      <h1>
        <center>Inventario</center>
      </h1>
      <ProductList products={products} />
    </div>
  );
}

export default App;
