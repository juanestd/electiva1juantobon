import { useState } from "react";
import { SearchBar } from "./SearchBar";

function App() {

    const [valorInput, setValorInput] = useState ('');
    const [gifs, setGifs] = useState([]);


    const onChange = (event) => {
        const valor = event.target.value;
        setValorInput(valor);
    }

    const getGifs = async ( query ) => {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=tfrSfdwyFvjOg08W6QaVGZcjx7LnFzSM&q=${query}`;
        const response = await fetch(url);
        const data= await response.json();
        console.log(data)
        return data.data;    
    };

    const onSubmit = async (event) => {
        event.preventDefault()
        const gifs = await getGifs(valorInput)
        setGifs (gifs)
    }

        // JSX
    return(
        <div className="App">
            <h2> BUSCADOR DE IMAGENES GIF</h2>
            
            <SearchBar 
                valorInput={valorInput}
                onChange={onChange}
                onSubmit={onSubmit}
            />
            <div className="Separator"></div>
        {
            gifs.map(gif=>(
            <img className="gif" key={gif.id} src={gif.images.original.url} alt={gif.title} /> 
            ))
        }
        
        </div>
        
    )
}
export default App