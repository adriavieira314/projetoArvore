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
                            <p>Você tem 2 pergunta(s) para ajudar na trilha de Miguel José!</p>
                        </div>
                        <Link to='/interacao2' >
                            <button>Começar</button>
                        </Link>
                    </div>
                    
                </section>
            </main>
        );
    }
}

export default Trilhas;