import { createContext, useState, useEffect } from 'react';

export const CarritoContext = createContext();
export const CarritoProvider = ({ children }) => {
  
 
  const [carrito, setCarrito] = useState(() => {
    const carritoGuardado = localStorage.getItem('carrito');
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
  });

  // Usar useEffect para guardar en localStorage CADA VEZ que el 'carrito' cambie
  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]); 

  // Función para agregar un producto al carrito
  const agregarAlCarrito = (producto) => {
    // Buscamos si el producto ya está en el carrito por su 'id'
    const productoEnCarrito = carrito.find(item => item.id === producto.id);

    if (productoEnCarrito) {
      // Si está, creamos un nuevo carrito
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

  //  Función para eliminar un producto
  const eliminarProducto = (productoId) => {
    const nuevoCarrito = carrito.filter(item => item.id !== productoId);
    setCarrito(nuevoCarrito);
  };

  // Función para vaciar el carrito 
  const vaciarCarrito = () => {
    setCarrito([]);
  };


  return (
    <CarritoContext.Provider 
      value={{
        carrito,
        agregarAlCarrito,
        eliminarProducto,
        vaciarCarrito
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};