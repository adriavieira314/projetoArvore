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
                        <div id='box'>
                            <p className='texto'>Você sabe o que é uma escultura?</p>
                            <p className='texto'>Ela pode ser considerada uma das formas mais complexas de arte. Há milhares de anos, vários artistas vêm fazendo esculturas de diversas formas e tamanhos.</p>
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