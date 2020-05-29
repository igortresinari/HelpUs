import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn, FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

export default function LogonPessoaFisica() {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try{
            const response = await api.post('sessionspf', {id});

            localStorage.setItem('idPf', id);
            localStorage.setItem('nomePf', response.data.firstname);

           history.push('/search');
        }catch(err) {
            alert('Falha no login, tente novamente.'); 
        }
    }

    return (
        <div className="logonpf-container">
            <section className="form">
                <img src={logoImg} alt="HelpUs" />

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>

                    <input
                        placeholder="Insira sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/registerpessoafisica">
                        <FiLogIn size={16} color="#2D0073" />
                    Não tenho cadastro
                    </Link>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#2D0073" />
                    Retornar
                    </Link>
                </form>
            </section>
        </div>
    );
}