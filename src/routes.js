import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'; //rotas para transição entre paginas

import Home from '../src/TelaInicial';
import TrilhaInicio from '../src/Trilhas/TrilhaInicial';
import Trilha1 from './Trilhas/Trilha1/Trilha1';
import Trilha2 from './Trilhas/Trilha2/Trilha2';
import Trilha3 from './Trilhas/Trilha3/Trilha3';
import Trilha4 from './Trilhas/Trilha4/Trilha4';
// import Trilha5 from './Trilhas/Trilha5/Trilha5';
// import Trilha6 from './Trilhas/Trilha6/Trilha6';
// import Trilha7 from './Trilhas/Trilha7/Trilha7';
// import Trilha8 from './Trilhas/Trilha8/Trilha8';
// import Trilha9 from './Trilhas/Trilha9/Trilha9';
// import Trilha10 from './Trilhas/Trilha10/Trilha10';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact={true} component={Home} />
                <Route path='/trilha' component={TrilhaInicio} />
                <Route path='/trilha1' component={Trilha1} />
                <Route path='/trilha2' component={Trilha2} />
                <Route path='/trilha3' component={Trilha3} />
                <Route path='/trilha4' component={Trilha4} />
                {/* <Route path='/trilha5' component={Trilha5} />
                <Route path='/trilha6' component={Trilha6} />
                <Route path='/trilha7' component={Trilha7} />
                <Route path='/trilha8' component={Trilha8} />
                <Route path='/trilha9' component={Trilha9} />
                <Route path='/trilha10' component={Trilha10} /> */}
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;