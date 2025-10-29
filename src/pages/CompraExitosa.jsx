import { Link, Navigate } from 'react-router-dom';


function CompraExitosa({ orden }) {
  if (!orden) {
    return <Navigate to="/" replace />;
  }

  return (
    <section>
      <h1 style={{ color: 'limegreen', textAlign: 'center' }}>¡Gracias por tu Compra!</h1>
      <p style={{ textAlign: 'center' }}>Tu pedido ha sido confirmado.</p>
      
      <div className="boleta" style={{ 
        border: '1px solid limegreen', 
        padding: '20px', 
        margin: '20px 0', 
        borderRadius: '5px' 
      }}>
        <h2>Boleta de Compra</h2>
        <p><strong>Nº de Orden:</strong> {orden.id}</p>
        <p><strong>Fecha:</strong> {orden.fecha}</p>
        
        <h3>Detalle de Productos:</h3>
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio Unitario</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {orden.items.map(item => (
              <tr key={item.id}>
                <td>{item.nombre}</td>
                <td>{item.cantidad}</td>
                <td>${item.precio.toLocaleString('es-CL')}</td>
                <td>${(item.precio * item.cantidad).toLocaleString('es-CL')}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <h3 style={{ textAlign: 'right', fontSize: '1.5em', color: 'limegreen' }}>
          Total Pagado: ${orden.total.toLocaleString('es-CL')}
        </h3>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Link to="/catalogo">
          <button>Seguir Comprando</button>
        </Link>
      </div>
    </section>
  );
}

export default CompraExitosa;