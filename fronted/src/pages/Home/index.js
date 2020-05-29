import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Home() {

    return (
        <div className="home-container">
            <section className="form">
                <img src={logoImg} alt="HelpUs" />

                <form>
                    <h1>Faça seu logon</h1>

                    <Link className="button" to="/logonpessoafisica">Entrar como Pessoa Física</Link>
                    <Link className="button" to="/logon">Entrar como ONG</Link>
                </form>
            </section>
        </div>
    );
}