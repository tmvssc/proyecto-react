// src/App.js
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

// Importa los productos iniciales
import { productos as productosIniciales } from './data/productos.js';

// Componentes y Páginas
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import RutaProtegida from './components/RutaProtegida';
import Inicio from './pages/Inicio';
import Catalogo from './pages/Catalogo';
import Carrito from './pages/Carrito';
import Contacto from './pages/Contacto';
import Login from './pages/Login'; 
import ProductoDetalle from './pages/ProductoDetalle';
import Admin from './pages/Admin';
import CompraExitosa from './pages/CompraExitosa';
import CompraRechazada from './pages/CompraRechazada';

function App() {
  
  // --- ESTADOS DE LA APP ---
  
  // Estado del Carrito (sincronizado con localStorage)
  const [carrito, setCarrito] = useState(() => {
    const carritoGuardado = localStorage.getItem('carrito');
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
  });
  
  // Efecto para guardar el carrito en localStorage
  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  // Estado de Sesión (quién está conectado)
  const [usuarioActual, setUsuarioActual] = useState(null);
  
  // Estado de Productos (lee los productos iniciales)
  const [productos, setProductos] = useState(productosIniciales);
  
  // Estado para la "Boleta" (guarda la última orden)
  const [ultimaOrden, setUltimaOrden] = useState(() => {
    return JSON.parse(localStorage.getItem('ultimaOrden')) || null;
  });

  
  // --- FUNCIONES DE CARRITO ---
  
  const agregarAlCarrito = (producto) => {
    const productoEnCarrito = carrito.find(item => item.id === producto.id);
    if (productoEnCarrito) {
      const nuevoCarrito = carrito.map(item =>
        item.id === producto.id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      );
      setCarrito(nuevoCarrito);
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
    alert(`${producto.nombre} fue agregado al carrito`);
  };

  const eliminarProducto = (productoId) => {
    const nuevoCarrito = carrito.filter(item => item.id !== productoId);
    setCarrito(nuevoCarrito);
  };
  
  const vaciarCarrito = () => {
    setCarrito([]);
  };

  // Función de 'comprarCarrito' que crea la boleta
  const comprarCarrito = () => {
    if (carrito.length === 0) {
      return false; // Falla si el carrito está vacío
    }
    
    // 1. Calcula el total
    const totalOrden = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
    
    // 2. Crea el objeto de la orden (la boleta)
    const nuevaOrden = {
      id: Date.now(),
      fecha: new Date().toLocaleString(),
      items: carrito, // Guarda los items
      total: totalOrden
    };

    // 3. Guarda la orden en el estado y en localStorage
    setUltimaOrden(nuevaOrden);
    localStorage.setItem('ultimaOrden', JSON.stringify(nuevaOrden));

    // 4. Vacía el carrito
    vaciarCarrito();
    
    return true; // Éxito
  };
  
  // --- FUNCIONES DE SESIÓN ---
  
  const handleLogin = (email, password) => {
    if (email === 'admin@admin.cl' && password === 'admin123') {
      setUsuarioActual({ email: email, esAdmin: true });
      alert('¡Bienvenido, Administrador!');
    } else {
      setUsuarioActual({ email: email, esAdmin: false });
      alert(`¡Bienvenido, ${email}!`);
    }
  };

  const handleLogout = () => {
    setUsuarioActual(null);
    alert('Sesión cerrada.');
  };

  // --- RENDERIZADO DEL COMPONENTE ---
  return (
    <>
      <Navbar usuarioActual={usuarioActual} onLogout={handleLogout} /> 
      <main>
        <Routes>
          {/* --- Rutas Públicas --- */}
          <Route 
            path="/" 
            element={<Inicio agregarAlCarrito={agregarAlCarrito} productos={productos} />} 
          />
          <Route 
            path="/catalogo" 
            element={<Catalogo agregarAlCarrito={agregarAlCarrito} productos={productos} />} 
          />
          <Route 
            path="/carrito" 
            element={
              <Carrito 
                carrito={carrito} 
                eliminarProducto={eliminarProducto}
                vaciarCarrito={vaciarCarrito}
                comprarCarrito={comprarCarrito}
              />
            } 
          />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route 
            path="/producto/:id" 
            element={<ProductoDetalle agregarAlCarrito={agregarAlCarrito} />} 
          />

          {/* --- Ruta de Admin Protegida --- */}
          <Route 
            path="/admin" 
            element={
              <RutaProtegida usuario={usuarioActual}>
                <Admin productos={productos} />
              </RutaProtegida>
            } 
          />

          {/* --- Rutas de Compra --- */}
          <Route 
            path="/compra-exitosa" 
            element={<CompraExitosa orden={ultimaOrden} />} 
          />
          <Route path="/compra-rechazada" element={<CompraRechazada />} />

        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;