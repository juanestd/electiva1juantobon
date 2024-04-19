import { useNavigate, Link, Outlet } from 'react-router-dom';
import { useAuth } from '../src/context/AuthContext';
import { getAuth, signOut } from 'firebase/auth';

export const Navbar = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const auth = getAuth();

    const onLogout = () => {
        signOut(auth).then(() => {
            navigate('/login', { replace: true });
        }).catch((error) => {
            console.error('Error al cerrar sesión:', error);
        });
    };

return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src="../public/product-hunt.svg"  style={{ height: '30px' }} />
                    </Link>
                    <button className="navbar-toggler" type="button" 
                    data-bs-toggle="collapse" data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                        <div className="d-flex align-items-center">
                            <input className="form-control me-2" type="search" 
                            placeholder="Buscar productos" aria-label="Search" style={{ maxWidth: "300px" }} />
                            <button className="btn btn-danger" type="submit">Buscar</button>
                        </div>
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            {user ? (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/newproduct">Añadir producto</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/profile">{user.name || user.displayName}</Link>
                                    </li>
                                    <li className="nav-item">
                                        <button className="btn btn-danger" onClick={onLogout}>Cerrar sesión</button>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">Iniciar sesión</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/register">Registrarse</Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
);
};
