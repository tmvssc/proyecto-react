import { useParams, useNavigate } from 'react-router-dom';
import { productos } from '../data/productos.js';

function ProductoDetalle({ agregarAlCarrito }) {
  const navigate = useNavigate(); 


  const { id } = useParams();

 
  const producto = productos.find(p => p.id === id);

  const handleAgregar = () => {
    agregarAlCarrito(producto);
  };

  if (!producto) {
    return (
      <section>
        <h2>Producto no encontrado</h2>
        <p>El producto que buscas no existe.</p>
        <button onClick={() => navigate('/catalogo')}>Volver al Catálogo</button>
      </section>
    );
  }

  
  return (
    <>
      <header>
        <h1>{producto.nombre}</h1>
      </header>

      <section className="detalle-producto">
        <div className="detalle-imagen">
          <img src={producto.img} alt={producto.nombre} />
        </div>
        <div className="detalle-info">

          <p>{producto.descripcion}</p>

          <p className="detalle-precio">
            ${producto.precio.toLocaleString('es-CL')} CLP
          </p>

          <button onClick={handleAgregar}>Agregar al carrito</button>
        </div>
      </section>
    </>
  );
}

export default ProductoDetalle;