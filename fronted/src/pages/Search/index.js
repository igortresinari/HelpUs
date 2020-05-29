import React, { useState } from 'react';
import {  useHistory } from 'react-router-dom';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

export default function Search() {
    const [city, setCity] = useState('');
    const history = useHistory();

    async function handleSearch(e) {
        e.preventDefault();

        try{
            const response = await api.post('search', {city});

            localStorage.setItem('city', city);

            console.log(response.data.name)

           history.push('/eventlist');
        }catch(err) {
            alert('Falha ao localizar eventos, tente novamente.'); 
        }
    }

    return (
        <div className="search-container">
            <section className="form">
                <img src={logoImg} alt="HelpUs" />

                <form onSubmit={handleSearch}>
                    <h1>Selecione a cidade que deseja ver os eventos disponíveis</h1>
                <select 
                    onChange={e => setCity(e.target.value)}
                    >
                        <option value="" disabled selected hidden>Selecione a cidade</option>
                        <option value="Belo Horizonte, MG">Belo Horizonte, MG</option>
                        <option value="São Paulo, SP">São Paulo, SP</option>
                        <option value="Rio de Janeiro, RJ">Rio de Janeiro, RJ</option>
                        <option value="Vitória, ES">Vitória, ES</option>
                    </select>
                    
                    <button className="button" type="submit">Confirmar</button>
                </form>
            </section>
        </div>
    );
}