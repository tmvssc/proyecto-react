import { Link } from 'react-router-dom';

function CompraRechazada() {
  return (
    <section style={{ textAlign: 'center' }}>
      <h1 style={{ color: '#aa0000' }}>Compra Rechazada</h1>
      <p>No pudimos procesar tu orden.</p>
      <p>Esto suele ocurrir porque tu carrito de compras estaba vacío.</p>
      <Link to="/carrito">
        <button>Volver al Carrito</button>
      </Link>
    </section>
  );
}

export default CompraRechazada;