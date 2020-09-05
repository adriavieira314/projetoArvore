import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'; //rotas para transição entre paginas

import Home from '../src/TelaInicial';
import Trilha from '../src/Trilhas/Trilha';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact={true} component={Home} />
                <Route path='/trilha' component={Trilha} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;