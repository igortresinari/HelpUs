import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api'
import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');

    const history = useHistory();


    async function handleRegister(e) {
        e.preventDefault();

        const data = ({
            name,
            email,
            whatsapp
        })

        try {
            const response = await api.post('ongs', data);

            alert(`Seu ID de acesso: ${response.data.id}`);

            history.push('/logon');
        } catch (err) {
            alert('Erro ao cadastrar');
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="HelpUs" />
                    <h1>Cadastro</h1>
                    <p>Encontre ONGs e pessoas precisando de ajuda em eventos!</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#2D0073" />
                    Voltar para Login
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input
                        placeholder="Nome da Ong"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Whats App"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />

                    <button className="button" type="submit">Confirmar</button>
                </form>

            </div>
        </div>
    );
}