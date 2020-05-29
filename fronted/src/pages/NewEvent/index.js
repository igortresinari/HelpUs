import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function NewEvent() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');

    async function handleNewEvent(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            address,
            city
        };

        try {
            await api.post('events', data, {
                headers: {
                    Authorization: ongId,
                }
            })

            history.push('/profile');
        } catch (err) {
            alert('Erro ao cadastrar evento.')
        }

    }


    return (
        <div className="new-event-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="HelpUs" />
                    <h1>Cadastrar novo evento</h1>
                    <p>Descreva o evento para encontrar ajuda!</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#2D0073" />
                        Voltar para home
                    </Link>
                </section>

                <form onSubmit={handleNewEvent}>
                    <input
                        placeholder="Título do evento"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input
                        placeholder="Endereço"
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                    />
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

            </div>
        </div>
    );
}