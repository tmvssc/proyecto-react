import { useEffect, useState } from 'react';
import ProductoCard from '../components/ProductoCard';
import axios from 'axios';

function Catalogo({ agregarAlCarrito }) {
  const [filtro, setFiltro] = useState('todos');

  const handleFiltroChange = (e) => {
    setFiltro(e.target.value);
  };
  const [productos, setProductos] = useState([]);
  
  useEffect(()=>
    {
      const cargarProductos= async()=>
      {
        const cargarProductos= await axios.get('http://localhost:8001/producto');
        setProductos(cargarProductos.data);
      }
  cargarProductos()
  },[])
  const productosFiltrados = productos.filter(producto => {
    if (filtro === 'todos') return true;
    return producto.categoria === filtro;
  });

  return (
    <>
      <header>
        <h1>Level-Up Gamer</h1>
        <p>Catálogo de productos</p>
      </header>

      <section>
        <h2>Catálogo de Productos</h2>

        <label htmlFor="filtro">Filtrar por categoría:</label>
        <select id="filtro" onChange={handleFiltroChange} value={filtro}>
          <option value="todos">Todos</option>
          <option value="juegos">Juegos de mesa</option>
          <option value="consolas">Consolas</option>
          <option value="pc">PC Gamer</option>
          <option value="perifericos">Periféricos</option>
          <option value="ropa">Ropa gamer</option>
        </select>

        <div className="catalogo-lista"> 
          {productosFiltrados.map(producto => (
            <ProductoCard 
              key={producto.id} 
              producto={producto}
              agregarAlCarrito={agregarAlCarrito} 
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Catalogo;
