import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../hook/useForm'; 
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import appFirebase from '../credenciales'; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../RegisterPage.css'; 

const auth = getAuth(appFirebase);

export const RegisterPage = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const { name, email, password, usuario, onInputChange, onResetForm } = useForm({
        name: '',
        email: '',
        password: '',
        usuario: '',
    });

    useEffect(() => {
        AOS.init({
            duration: 1200,
            easing: 'ease-in-out-quart',
            once: true,
        });
    }, []);

    const onRegister = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                return updateProfile(userCredential.user, { displayName: name }).then(() => {
                    navigate('/dashboard', { replace: true, state: 
                        { logged: true, name: userCredential.user.displayName } });

                });
            })
            .catch((error) => {
                setError(`Error al registrar el usuario: ${error.message}`);
            })
            .finally(() => {
                onResetForm();
            });
    };

    return (
        <div className='container py-5' data-aos="fade-up">
            <div className='row justify-content-center'>
                <div className='col-md-6'>
                    <div className='card registration-card shadow-lg p-4 mb-5 bg-body rounded' data-aos="zoom-in">
                        <form onSubmit={onRegister} className='card-body'>
                            <h2 className='card-title text-center mb-4'>Registrarse</h2>
                            {error && <div className='alert alert-danger' data-aos="fade-right">{error}</div>}
                            <div className='mb-3' data-aos="fade-up">
                                <label htmlFor='name' className='form-label'>Nombre completo</label>
                                <input type='text' className='form-control' 
                                name='name' id='name' value={name} onChange={onInputChange} required />
                            </div>
                            <div className='mb-3' data-aos="fade-up">
                                <label htmlFor='usuario' className='form-label'>Nombre de usuario</label>
                                <input type='usuario' className='form-control' 
                                name='usuario' id='usuario' value={usuario} onChange={onInputChange} required />
                            </div>
                            <div className='mb-3' data-aos="fade-up">
                                <label htmlFor='email' className='form-label'>Correo Electrónico</label>
                                <input type='email' className='form-control' 
                                name='email' id='email' value={email} onChange={onInputChange} required />
                            </div>
                            <div className='mb-3' data-aos="fade-up">
                                <label htmlFor='password' className='form-label'>Contraseña</label>
                                <input type='password' className='form-control' name='password'
                                 id='password' value={password} onChange={onInputChange} required />
                            </div>
                            <button type='submit' className='btn btn-danger' data-aos="flip-up">Registrarse</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
