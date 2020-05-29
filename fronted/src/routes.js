import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home/index';
import Logon from './pages/Logon/index';
import LogonPessoaFisica from './pages/LogonPessoaFisica/index';
import RegisterPessoaFisica from './pages/RegisterPessoaFisica/index';
import Register from './pages/Register/index';
import Profile from './pages/Profile/index';
import NewEvent from './pages/NewEvent/index';
import Search from './pages/Search/index';
import EventList from './pages/EventList/index';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/logon" component={Logon} />
                <Route path="/logonpessoafisica" component={LogonPessoaFisica} />
                <Route path="/registerpessoafisica" component={RegisterPessoaFisica} />
                <Route path="/search" component={Search} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/events/new" component={NewEvent} />
                <Route path="/eventlist" component={EventList} />
            </Switch>
        </BrowserRouter>
    )
}