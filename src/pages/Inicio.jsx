import ProductoCard from '../components/ProductoCard';

import logo from '../assets/images/level_logo.PNG';

function Inicio({ agregarAlCarrito,productos }) {
  const productoDestacado = productos.find(p => p.id === 'logitech-g502');

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