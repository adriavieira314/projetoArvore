import React from 'react';
import { HeaderParents } from '../AcessoPais';
import { UserParentsChangeColor } from '../Interacao1/userParents';
import { Link } from 'react-router-dom';

class Trilhas extends React.Component {
    render() {
        return (
            <main>
                <HeaderParents />
                <section id='inicio-interacao'>
                    <UserParentsChangeColor />
                    <div id='conteudo-interacao'>
                        <div id='box-interacao'>
                            <p>A Trilha do árvore agradece a sua participação!</p>
                            <p>Fique de olho nas notificações e continue ajudando Miguel José a desbravar a sua trilha do conhecimento!</p>
                        </div>
                        <Link to='/acesso-pais'>
                            <button>Fechar</button>
                        </Link>
                    </div>
                </section>
            </main>
        );
    }
}

export default Trilhas;