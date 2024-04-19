import React from 'react';
import { Link } from 'react-router-dom';

export const DashboardPage = () => {
    const latestProducts = [
        { id: 1, title: "Producto 1", description: "Descripción del Producto 1",
         user: "Usuario 1", rating: 4.5, reviews: 10 },
        { id: 2, title: "Producto 2", description: "Descripción del Producto 2", 
        user: "Usuario 2", rating: 3.0, reviews: 8 },
        { id: 3, title: "Producto 3", description: "Descripción del Producto 2", 
        user: "Usuario 3", rating: 4.0, reviews: 6 },
        { id: 4, title: "Producto 4", description: "Descripción del Producto 2", 
        user: "Usuario 4", rating: 3.9, reviews: 9 }
    ];

    const topRatedProducts = [
        { id: 5, title: "Producto 5", description: "Descripción del Producto 3",
         user: "Usuario 3", rating: 5.0, reviews: 15 },
        { id: 6, title: "Producto 6", description: "Descripción del Producto 4", 
        user: "Usuario 3", rating: 4.8, reviews: 20 },
        { id: 7, title: "Producto 7", description: "Descripción del Producto 4", 
        user: "Usuario 4", rating: 4.7, reviews: 23 },
        { id: 8, title: "Producto 8", description: "Descripción del Producto 4", 
        user: "Usuario 1", rating: 4.7, reviews: 18 }
    ];

    return (
        <div className="container my-5">
            <div className="row mb-4">
                <div className="col-12">
                    <div className="alert alert-info" role="alert">
                        <h4 className="alert-heading">¡Bienvenido a Product Hunt! 👋</h4>
                        <p>El lugar para lanzar y descubrir nuevos productos tecnológicos.</p>
                        <hr />
                        <p className="mb-0">Haz un recorrido.</p>
                    </div>
                </div>
            </div>
         
            <div className="row">
                <div className="col-md-6">
                    <h2>Últimos Productos Publicados</h2>
                    <div className="list-group">
                        {latestProducts.map(product => (
                            <Link to={`/product/${product.id}`} key={product.id} 
                            className="list-group-item list-group-item-action">
                                <h5>{product.title}</h5>
                                <p>{product.description}</p>
                                <small>Por {product.user}</small>
                                <div>
                                    <span className="badge bg-primary">{product.rating} Estrellas</span>
                                    <span className="badge bg-secondary">{product.reviews} Reseñas</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="col-md-6">
                    <h2>Productos Mejor Calificados</h2>
                    <div className="list-group">
                        {topRatedProducts.map(product => (
                            <Link to={`/product/${product.id}`} key={product.id} 
                            className="list-group-item list-group-item-action">
                                <h5>{product.title}</h5>
                                <p>{product.description}</p>
                                <small>Por {product.user}</small>
                                <div>
                                    <span className="badge bg-primary">{product.rating} Estrellas</span>
                                    <span className="badge bg-secondary">{product.reviews} Reseñas</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
