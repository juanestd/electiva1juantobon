import { useNavigate, Link, Outlet } from 'react-router-dom';
import { useAuth } from '../src/context/AuthContext'; // Asegúrate que la ruta es correcta
import { getAuth, signOut } from 'firebase/auth';

export const Navbar = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const auth = getAuth();  // Asegúrate que esto esté definido si no se importa desde otro lugar

    const onLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate('/login', { replace: true });
        }).catch((error) => {
            // An error happened.
            console.error('Error signing out:', error);
        });
    };

    return (
        <>
            <header>
                <h1><Link to='/'>Logo</Link></h1>
                {user ? (
                    <div className='user'>
                        <span className='username'>{user.email || user.displayName}</span>
                        <button className='btn-logout' onClick={onLogout}>
                            Cerrar sesión
                        </button>
                    </div>
                ) : (
                    <nav>
                        <Link to='/login'>Iniciar sesión</Link>
                        <Link to='/register'>Registrarse</Link>
                    </nav>
                )}
            </header>
            <Outlet />
        </>
    );
};
