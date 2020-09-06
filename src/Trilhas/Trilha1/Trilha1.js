import React from 'react';
import { Header, UserSide } from '../../Header';
import './style.css';

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
                            <p className='texto'>As esculturas são artes tridimensionais. Isso porque elas tem três dimensões: altura, largura e profundidade.</p>
                            <p className='texto'>Esse tipo de obra de arte pode ser feito com diversos materiais: argila, madeira, pedra, metal, resinas sintéticas e muito mais!</p>
                        </div>
                        <button id='avancar'>Avançar</button>
                    </div>
                    
                </section>
            </main>
        );
    }
}

export default Trilhas;