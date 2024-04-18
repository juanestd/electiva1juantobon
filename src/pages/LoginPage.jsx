import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../hook/useForm';
import { auth } from '../credenciales'; 
import { signInWithEmailAndPassword } from "firebase/auth";

export const LoginPage = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(''); 
    const { email, password, onInputChange, onResetForm } =
        useForm({
            email: '',
            password: '',
        });

    const onLogin = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log("Usuario autenticado:", userCredential.user); 
            navigate('/dashboard', {
                replace: true,
                state: {
                    logged: true,
                    name: userCredential.user.displayName || email,
                },
            });
            onResetForm();
        } catch (error) {
            console.error("Error al iniciar sesión: ", error.message);
            setError("Falló el inicio de sesión. Por favor vuelve a intentarlo."); 
        }
    };

    return (
        <div className='container py-5'>
            <div className='row justify-content-center'>
                <div className='col-md-6'>
                    <div className='card shadow-lg p-3 mb-5 bg-white rounded' 
                    style={{ background: 'linear-gradient(to right, #434343 0%, #000000 100%)', 
                    color: 'white' }}>
                        <form onSubmit={onLogin} className='card-body'>
                            <h2 className='card-title text-center mb-4'>Iniciar Sesión</h2>
                            {error && <div className='alert alert-danger'>{error}</div>}
                            <div className='mb-3'>
                                <label htmlFor='email' className='form-label'>Correo Electrónico</label>
                                <input
                                    type='email'
                                    className='form-control'
                                    name='email'
                                    id='email'
                                    value={email}
                                    onChange={onInputChange}
                                    required
                                />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='password' className='form-label'>Contraseña</label>
                                <input
                                    type='password'
                                    className='form-control'
                                    name='password'
                                    id='password'
                                    value={password}
                                    onChange={onInputChange}
                                    required
                                />
                            </div>
                            <button type='submit' className='btn btn-primary w-100'>Entrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
