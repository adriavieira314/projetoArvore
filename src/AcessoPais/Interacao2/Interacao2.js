import React from 'react';
import { HeaderParents, UserSideParents } from '../AcessoPais';
import './style.css';
import { Link } from 'react-router-dom';


class Trilhas extends React.Component {
    
    render() {
        return (
            <main>
                <HeaderParents />
                <section id='inicio-interacao'>
                    <UserSideParents />
                    <div id='conteudo-interacao'>
                        <div id='box-interacao'>
                            <p>No Eixo Monumental, no municipio de Brasília, está localizada a esculta de ____________________________, homenageando o presidente brasileira e sua esposa.</p>
                            <p>Em memória a um dos maiores poetas brasileiros Carlos Drummond de Andrade, foi feita uma escultura que esta localizada na ________________________ no Rio de Janeiro.</p>
                        </div>
                        <Link to='/interacao3'>
                            <button>Validar</button>
                        </Link>
                    </div>
                    
                </section>
            </main>
        );
    }
}

export default Trilhas;