import { useNavigate } from 'react-router-dom'; // <-- IMPORTACIÓN NECESARIA

// Recibe la  función 'comprarCarrito'
function Carrito({ carrito, eliminarProducto, vaciarCarrito, comprarCarrito }) {
  
  const navigate = useNavigate(); 

  const calcularTotal = () => {
    return carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0);
  };

  //  función que maneja la lógica de redirección
  const handleComprar = () => {
    const exito = comprarCarrito(); 
    
    if (exito) {
      navigate('/compra-exitosa');
    } else {
      navigate('/compra-rechazada');
    }
  };

  return (
    <>
      <header>
        <h1>Carrito de Compras</h1>
      </header>

      <section>
        <h2>Productos en tu carrito</h2>
        
        {carrito.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          <>
            <table border="15" cellPadding="10">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Total</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {carrito.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img src={item.img} alt={item.nombre} width="50" />
                      {item.nombre}
                    </td>
                    <td>${item.precio.toLocaleString('es-CL')}</td>
                    <td>{item.cantidad}</td>
                    <td>${(item.precio * item.cantidad).toLocaleString('es-CL')}</td>
                    <td>
                      <button onClick={() => eliminarProducto(item.id)}>
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3>Total: ${calcularTotal().toLocaleString('es-CL')} CLP</h3>
            <button onClick={vaciarCarrito}>Vaciar Carrito</button>
            <button onClick={handleComprar}>Comprar</button>
          </>
        )}
      </section>
    </>
  );
}

export default Carrito;