import React from 'react';
import { Header, UserSide } from '../../Header';
import './style.css';
import { Link } from 'react-router-dom';


class Trilhas extends React.Component {
    render() {
        return (
            <main>
                <Header />
                <section id='inicio-trilha'>
                    <UserSide />
                    <div id='conteudo'>
                        <div id='box-texto'>
                            <p className='texto'>As esculturas podem ser figuratuvas: que são aquelas que representam a imagem de uma pessoa, animal, objeto, etc., e também tem as esculturas abstratas, que não representa objetos próprios da nossa realidade.</p>
                            <p className='texto'>Um dos artistas mais famosos no mundo é o Michelangelo, que fez esculturas como David, Pietá e Moises.</p>
                        </div>
                        <div id='voltar-avancar'>
                            <Link to='/trilha1'>
                                <button>Voltar</button>
                            </Link>
                            <Link to='/trilha3'>
                                <button>Avançar</button>
                            </Link>
                        </div> 
                    </div>
                </section>
            </main>
        );
    }
}

export default Trilhas;