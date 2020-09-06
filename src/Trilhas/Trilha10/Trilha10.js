import React from 'react';
import { Header, UserSide } from '../../Header';
import { Link } from 'react-router-dom';
import medalha from '../../assets/medalha.jpg';
import './style.css';

class Trilhas extends React.Component {
    
    render() {
        return (
            <main>
                <Header />
                <section id='inicio-trilha'>
                    <UserSide />
                    <div id='conteudo'>
                        <div id='box-texto'>
                            <img src={medalha} alt='Hora de Discutir' id='medalha' />
                            <p className='texto texto-alterado'>Parabéns, você finalizou a etapa 1 da Trilha de Experimentos. Nessa trilha falamos sobre artes e esculturas.</p>
                            <p className='texto texto-alterado'>Gostou? Então compartilhe com toda sua família e amigos essa expericência.</p>
                        </div>
                        <div id='voltar-avancar'>
                            <Link to='/'>
                                <button>Menu Trilhas</button>
                            </Link>
                            <button>Etapa 2</button>
                        </div> 
                    </div>
                    
                </section>
            </main>
        );
    }
}

export default Trilhas;