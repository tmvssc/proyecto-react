import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Login({ onLogin }) {
  const navigate = useNavigate(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (email.trim() === '' || password.trim() === '') {
      setError('Email y contraseña son obligatorios.');
      return;
    }

    onLogin(email, password); 
    

    setError('');
    navigate('/'); 
  };


  return (
    <>
      <header><h1>Level-Up Gamer</h1><p>Iniciar Sesión</p></header>
      <section>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label><br/>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <br/>
          <div>
            <label>Contraseña:</label><br/>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <br/>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit">Ingresar</button>
        </form>
      </section>
    </>
  );
}

export default Login;