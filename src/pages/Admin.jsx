const mockUsuarios = [
  { id: 1, email: 'admin@admin.cl', rol: 'Admin' },
  { id: 2, email: 'usuario@gmail.com', rol: 'Usuario' },
  { id: 3, email: 'cliente@hotmail.com', rol: 'Usuario' },
];


function Admin({ productos }) {
  
  return (
    <>
      <header>
        <h1>Panel de Administrador</h1>
      </header>
      

      <section>
        <h2>Dashboard</h2>
        <p>Resumen del sitio:</p>
        <ul>
          <li><strong>Usuarios Registrados:</strong> {mockUsuarios.length}</li>
          <li><strong>Productos en la Tienda:</strong> {productos.length}</li>
        </ul>
      </section>

      <section>
        <h2>Gestión de Usuarios</h2>
        <p>Lista de usuarios registrados en el sistema.</p>
        <table border="1" cellPadding="5" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Rol</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {mockUsuarios.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.rol}</td>
                <td>
                  <button style={{marginRight: '5px'}}>Editar</button>
                  <button style={{backgroundColor: '#aa0000', color: 'white'}}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      
        
      <section>
        <h2>Gestión de Contenido (Productos)</h2>
        <p>Lista de productos actuales en la tienda.</p>
        <table border="1" cellPadding="5" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Categoría</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map(p => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.nombre}</td>
                <td>${p.precio.toLocaleString('es-CL')}</td>
                <td>{p.categoria}</td>
                <td>
                  <button style={{marginRight: '5px'}}>Editar</button>
                  <button style={{backgroundColor: '#aa0000', color: 'white'}}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}

export default Admin;