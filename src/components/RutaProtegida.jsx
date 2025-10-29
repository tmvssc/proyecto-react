import { Navigate } from 'react-router-dom';

function RutaProtegida({ usuario, children }) {
  
  //  Si NO hay usuario, O si el usuario NO es admin
  if (!usuario || !usuario.esAdmin) {
    // redirige al Inicio
    alert('Acceso denegado. Debes ser administrador.');
    return <Navigate to="/" replace />;
  }

  //  Si es admin, muestra la página normal (los children)
  return children;
}

export default RutaProtegida;