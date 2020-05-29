import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Profile() {
    const [events, setEvents] = useState([]);

    const history =useHistory();

    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId,
            }
        }).then(response => {
            setEvents(response.data)
        })
    }, [ongId]);

    async function handleDeleteEvent(id){
        try{
            await api.delete(`events/${id}`, {
            headers: {
                Authorization: ongId,
            }
            });

            setEvents(events.filter(event => event.id !== id));
        } catch(err){
            alert('Erro ao deletar evento, tente novamente');
        }
    }

    function handleLogout() {
        localStorage.clear();

        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="HelpUs" />
                <span>Bem vindo(a), {ongName}</span>

                <Link className="button" to="/events/new">Cadastrar novo evento</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={16} color="#2D0073" />
                </button>
            </header>

            <h1>Eventos cadastrados</h1>

            <ul>
                {events.map(event => (
                    <li key={event.id}>
                        <strong>EVENTO:</strong>
                        <p>{event.title}</p>

                        <strong>DESCRIÇÂO:</strong>
                        <p>{event.description}</p>

                        <strong>ENDEREÇO:</strong>
                        <p>{event.address}</p>

                        <strong>CIDADE:</strong>
                        <p>{event.city}</p>

                        <button onClick={() => handleDeleteEvent(event.id)} type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}