import React from 'react';
import { HeaderParents, UserSideParents } from '../AcessoPais';
import { Link } from 'react-router-dom';
import discurso from '../../assets/discurso.jpg';

class Trilhas extends React.Component {
    
    render() {
        return (
            <main>
                <HeaderParents />
                <section id='inicio-trilha'>
                    <UserSideParents />
                    <div id='conteudo'>
                        <div id='box'>
                            <p>A Trilha do árvore agradece a sua participação!</p>
                            <p>Fique de olho nas notificações e continue ajudando Miguel José a desbravar a sua trilha do conhecimento!</p>
                        </div>
                        <Link to='/'>
                            <button>Fechar</button>
                        </Link>
                    </div>
                    
                </section>
            </main>
        );
    }
}

export default Trilhas;