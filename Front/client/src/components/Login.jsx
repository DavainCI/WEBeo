import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simula validación
    if (isLogin) {
      // Lógica de login simulada
      if (form.username && form.password) {
        navigate('/principal');
      } else {
        alert('Por favor, completa todos los campos');
      }
    } else {
      // Registro simulado
      if (form.username && form.email && form.password) {
        alert('Registrado correctamente. Inicia sesión.');
        setIsLogin(true);
      } else {
        alert('Completa todos los campos');
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>{isLogin ? 'Login' : 'Register'}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            required
          />
          {!isLogin && (
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
          )}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
        </form>
        <p>
          {isLogin ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?'}{' '}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? 'Regístrate' : 'Inicia sesión'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
