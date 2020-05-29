import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Profile() {
    const [events, setEvents] = useState([]);

    const history = useHistory();

    const city = localStorage.getItem('city');
    const firstname = localStorage.getItem('nomePf');

    useEffect(() => {
        api.get('eventlist', {
            headers: {
                Location: city,
            }
        }).then(response => {
            setEvents(response.data)
        })
    }, [city]);


    function handleLogout() {
        localStorage.clear();

        history.push('/');
    }

    return (
        <div className="eventlist-container">
            <header>
                <img src={logoImg} alt="HelpUs" />
                <span>Bem vindo(a), {firstname}</span>
                <button onClick={handleLogout} type="button">
                    <FiPower size={16} color="#2D0073" />
                </button>
            </header>

            <h1>Eventos cadastrados em {city}</h1>

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
                    </li>
                ))}
            </ul>
        </div>
    );
}