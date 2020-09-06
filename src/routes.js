import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'; //rotas para transição entre paginas

import Home from '../src/TelaInicial';
import TrilhaInicio from '../src/Trilhas/TrilhaInicial';
import Trilha1 from './Trilhas/Trilha1/Trilha1';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact={true} component={Home} />
                <Route path='/trilha' component={TrilhaInicio} />
                <Route path='/trilha1' component={Trilha1} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;