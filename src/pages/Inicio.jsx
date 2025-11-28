import ProductoCard from '../components/ProductoCard';

import logo from '../assets/images/level_logo.PNG';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Inicio({ agregarAlCarrito }) {
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
  const productoDestacado = productos.find(p => p.codigo === 'logitech-g502');

  return (
    <>
      <header>
        <h1>Level-Up Gamer</h1>
        <p>Tu tienda gamer en Chile</p>
        <img src={logo} alt="Logo Level-Up Gamer" width="200" />
      </header>

      <section>
        <h2>¡Bienvenido a Level-Up Gamer!</h2>
        <p>Aquí encontrarás los mejores productos para gamers en Chile.</p>
      </section>

      <section>
        <h3><u>Destacados</u></h3>
        {productoDestacado && (
          <ProductoCard 
            producto={productoDestacado} 
            agregarAlCarrito={agregarAlCarrito} 
          />
        )}
      </section>
    </>
  );
}

export default Inicio;