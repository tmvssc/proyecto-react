import { useState } from 'react';

function Contacto() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (nombre.trim() === '' || email.trim() === '' || mensaje.trim() === '') {
      setError('Todos los campos son obligatorios.');
      return;
    }
    setError('');
    alert('¡Muchas gracias por ponerte en contacto con  Level-Up gamer nos podremos en contacto los antes posible!');
    setNombre('');
    setEmail('');
    setMensaje('');
  };

  return (
    <>
      <header>
        <h1>Level-Up Gamer</h1>
      </header>

      <section>
        <h2>Contáctanos</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre:</label><br/>
            <input 
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <br/>
          <div>
            <label>Email:</label><br/>
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br/>
          <div>
            <label>Mensaje:</label><br/>
            <textarea 
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)} 
            ></textarea>
          </div>
          <br/>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit">Enviar</button>
        </form>
      </section>
    </>
  );
}


export default Contacto;