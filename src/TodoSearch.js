import React from 'react';
import './TodoSearch.css'

function TodoSearch() {
    const [seachValue, setSearchValue] = React.useState('')
    console.log('Los usuarios estan buscando ' + seachValue
    )
    return (
        <input className="search" placeholder="Ej: Salir a Correr"
        value={seachValue}
        onChange={ (event) => {
            setSearchValue(event.target.value)
        }}
        />
    );
}

export {TodoSearch}