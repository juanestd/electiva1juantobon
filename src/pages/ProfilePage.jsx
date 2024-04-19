import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext'; 

export const ProfilePage = () => {
    const auth = useAuth(); 

    const { user } = auth;

 
    return (
        <div className='container mt-5'>
            <div className='row justify-content-center'>
                <div className='col-md-8'>
                    <div className='card'>
                        <div className='card-body'>
                            <h2 className='card-title text-center'>Perfil de Usuario</h2>
                            {user ? (
                                <div className='user-info'>
                                    <p><strong>ID:</strong> {user._id}</p>
                                    <p><strong>Nombre:</strong> {user.displayName}</p>
                                    <p><strong>Nombre de Usuario:</strong> {user.usuario}</p>
                                    <p><strong>Email:</strong> {user.email}</p>
                                    <p><strong>Biografía:</strong> {user.bio}</p>
                                    <div>
                                        <strong>Avatar:</strong>
                                        <div>
                                            <img src={user.avatar} alt="Profile Avatar" 
                                            style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
                                        </div>
                                    </div>
                                    <p><strong>Fecha de Creación:</strong> {user.createdAt}</p>
                                    <p><strong>Fecha de Actualización:</strong> {user.updatedAt}</p>
                                </div>
                            ) : (
                                <p>No hay información de usuario disponible.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
