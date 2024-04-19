import React, { useState } from 'react';

const NewProductPage = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    const [tags, setTags] = useState('');
    const [images, setImages] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log({
            name,
            description,
            url,
            tags: tags.split(',').map(tag => tag.trim()), 
            images: images.split(',').map(image => image.trim()) 
        });
    };

    return (
        <div className="container mt-5">
            
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="productName" className="form-label">Nombre del Producto</label>
                    <input
                        type="text"
                        className="form-control"
                        id="productName"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="productDescription" className="form-label">Descripción del Producto</label>
                    <textarea
                        className="form-control"
                        id="productDescription"
                        rows="3"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="productUrl" className="form-label">URL del Producto</label>
                    <input
                        type="text"
                        className="form-control"
                        id="productUrl"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="productTags" className="form-label">Etiquetas </label>
                    <input
                        type="text"
                        className="form-control"
                        id="productTags"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="productImages" className="form-label">URLs de Imágenes </label>
                    <input
                        type="text"
                        className="form-control"
                        id="productImages"
                        value={images}
                        onChange={(e) => setImages(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Publicar Producto</button>
            </form>
        </div>
    );
};

export default NewProductPage;
