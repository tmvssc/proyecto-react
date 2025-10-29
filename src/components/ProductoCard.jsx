import { Link } from 'react-router-dom';

// Recibe 'agregarAlCarrito' directamente como un "prop"
function ProductoCard({ producto, agregarAlCarrito }) {
  
  const handleAgregar = () => {
    // Llama a la función que recibio
    agregarAlCarrito(producto);
  };

  return (
    <article className="producto">
      <Link to={`/producto/${producto.id}`}>
        <h3>{producto.nombre}</h3>
        <img src={producto.img} width="200" alt={producto.nombre} />
      </Link>
      <p><strong>${producto.precio.toLocaleString('es-CL')} CLP</strong></p>
      <button onClick={handleAgregar}>Agregar al carrito</button>
    </article>
  );
}

export default ProductoCard;