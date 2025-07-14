import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider 
} from 'firebase/auth';
import { getFirestore, doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth } from '../firebase';
import './Login.css';
import googleLogo from '../assets/googleG.png';

const Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [animation, setAnimation] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const saveUserData = async (userId, userData) => {
    const db = getFirestore();
    try {
      await setDoc(doc(db, "users", userId), {
        metadata: {
          createdAt: serverTimestamp(),
          lastLogin: serverTimestamp(),
          profileComplete: !!userData.username
        },
        authData: {
          email: userData.email,
          emailVerified: false,
          provider: userData.provider || 'email/password'
        },
        profile: {
          username: userData.username || '',
          displayName: userData.displayName || '',
          photoURL: userData.photoURL || ''
        },
        preferences: {
          theme: 'light',
          language: 'es'
        }
      }, { merge: true });
    } catch (error) {
      console.error("Error saving user data:", error);
      throw error;
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const toggleAuthMode = () => {
    setAnimation(isLogin ? 'slide-out-left' : 'slide-out-right');
    setTimeout(() => {
      setIsLogin(!isLogin);
      setAnimation(isLogin ? 'slide-in-right' : 'slide-in-left');
      setError('');
      setTimeout(() => setAnimation(''), 500);
    }, 500);
  };

  const handleEmailAuth = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      if (isLogin) {
        const userCredential = await signInWithEmailAndPassword(
          auth, 
          form.email, 
          form.password
        );
        
        await saveUserData(userCredential.user.uid, {
          email: form.email
        });
        
        navigate('/principal');
      } else {
        await handleRegister();
      }
    } catch (err) {
      setError(getFirebaseError(err.code));
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

      await saveUserData(userCredential.user.uid, {
        username: form.username,
        email: form.email,
        provider: 'email/password'
      });

      navigate('/principal');
    } catch (error) {
      throw error;
    }
  };

  const handleGoogleAuth = async () => {
    setError('');
    setIsLoading(true);
    
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      
      await saveUserData(result.user.uid, {
        username: result.user.displayName,
        email: result.user.email,
        photoURL: result.user.photoURL,
        provider: 'google',
        displayName: result.user.displayName
      });
      
      navigate('/principal');
    } catch (err) {
      setError(getFirebaseError(err.code));
    } finally {
      setIsLoading(false);
    }
  };

  const getFirebaseError = (code) => {
    switch (code) {
      case 'auth/invalid-email': return 'Email inválido';
      case 'auth/user-disabled': return 'Usuario deshabilitado';
      case 'auth/user-not-found': return 'Usuario no encontrado';
      case 'auth/wrong-password': return 'Contraseña incorrecta';
      case 'auth/email-already-in-use': return 'El email ya está registrado';
      case 'auth/weak-password': return 'La contraseña debe tener al menos 6 caracteres';
      case 'auth/popup-closed-by-user': return 'Cancelaste el inicio con Google';
      default: return 'Error al autenticar';
    }
  };

  return (
    <div className="login-container">
      <div className={`login-box ${animation}`}>
        <h2>{isLogin ? 'Iniciar sesión' : 'Registrarse'}</h2>
        
        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleEmailAuth}>
          {!isLogin && (
            <input
              type="text"
              name="username"
              placeholder="Nombre de usuario"
              value={form.username}
              onChange={handleChange}
              minLength="3"
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={form.password}
            onChange={handleChange}
            required
            minLength="6"
          />
          <button 
            type="submit" 
            disabled={isLoading}
            style={{
              backgroundColor: isLoading ? '#2a4d6e' : '#004080',
              color: 'white'
            }}
          >
            {isLoading && <span className="loading-spinner"></span>}
            {isLoading ? 'Procesando...' : (isLogin ? 'Iniciar sesión' : 'Registrarse')}
          </button>
        </form>

        <div className="social-login">
          <button 
            onClick={handleGoogleAuth} 
            className="google-btn"
            disabled={isLoading}
            style={{
              opacity: isLoading ? 0.7 : 1,
              cursor: isLoading ? 'not-allowed' : 'pointer'
            }}
          >
            <img 
              src={googleLogo} 
              alt="Google" 
              style={{ width: '20px', height: '20px' }}
            />
            {isLogin ? 'Iniciar con Google' : 'Registrarse con Google'}
          </button>
        </div>

        <p className="toggle-auth">
          {isLogin ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?'}{' '}
          <span 
            onClick={!isLoading ? toggleAuthMode : undefined}
            style={{ color: '#7fbfff' }}
          >
            {isLogin ? 'Regístrate' : 'Inicia sesión'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;