export const SearchBar = ({onSubmit, valorInput, onChange }) => {

    return (
        <form className="form-SearchBar" onSubmit={onSubmit}>
            
            <input 
             value={valorInput} 
             onChange={onChange} 
             type="text"
             id="search"
             placeholder="Ingrese su búsqueda"
            />
            <button type="submit">Buscar</button>
        </form>
    )
}
