import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../hook/useForm';
import { auth } from '../credenciales'; 
import { signInWithEmailAndPassword } from "firebase/auth";
import 'aos/dist/aos.css';
import AOS from 'aos';
import '../RegisterPage.css';  

export const LoginPage = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(''); 
    const { email, password, onInputChange, onResetForm } =
        useForm({
            email: '',
            password: '',
        });

    useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: 'ease-in-out-quart',
            once: true,
        });
    }, []);

    const onLogin = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log("Usuario correcto:", userCredential.user); 
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
            setError("Error al iniciar sesión. Por favor vuelve a intentarlo."); 
        }
    };

    return (
        <div className='container py-5'>
            <div className='row justify-content-center'>
                <div className='col-md-6'>
                    <div className='card registration-card shadow-lg p-4 mb-5 bg-body rounded' data-aos="zoom-in"
                    style={{ background: 'linear-gradient(to right, #000000 40%, #ff0000 200%)', 
                    color: 'white' }}>
                        <form onSubmit={onLogin} className='card-body'>
                            <h2 className='card-title text-center mb-4' data-aos="fade-up">Iniciar Sesión</h2>
                            {error && <div className='alert alert-danger' data-aos="fade-right">{error}</div>}
                            <div className='mb-3' data-aos="fade-up">
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
                            <div className='mb-3' data-aos="fade-up">
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
                            <button type='submit' className='btn btn-danger w-100' data-aos="flip-up">Entrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
