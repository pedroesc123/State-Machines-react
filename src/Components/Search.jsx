import React, {useState} from "react";
import './Search.css';

export const Search = ( {state, send} ) => {
    const [flight, setFlight] = useState('');

    const goToPassengers = () => {
        send('CONTINUE', {selectedCountry: flight})
    }

    const handleSelectChange = (event) => {
        setFlight(event.target.value)
    }

    const options = [];

    state.context.countries.map((country) => {
        options.push(country.name.common)
    })

    options.sort();

    return (
        <div className="Search">
            <p className="Search-title title">Busca tu destino</p>
            <select id="country" className="Search-select" value={flight} onChange = {handleSelectChange}>
                <option value="" disabled defaultValue>Escoge un pais</option>
                {options.map((option) => <option value={option} key=
                {option}>{option}</option>)}
            </select>
            <button onClick={goToPassengers} disabled = {flight === ''} className = 'Search-continue button'>Continue</button>
        </div>
    )
}
