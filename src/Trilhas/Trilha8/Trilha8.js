import React from 'react';
import { Header, UserSide } from '../../Header';
import { Link } from 'react-router-dom';
import michelangelo from '../../assets/mestre-michelangelo.jpg';
import esculturas from '../../assets/esculturas.jpg';
import './style.css';

class Trilhas extends React.Component {
    
    render() {
        return (
            <main>
                <Header />
                <section id='inicio'>
                    <UserSide />
                    <div id='livros'>
                        <img src={michelangelo} alt='Livro, O mestre Michelangelo' />
                        <p>Autor(a): Giselle Vargas<br/>Editora: Alfa e Beto Soluções<br/>Edição: 1ª ed.</p>
                        <p>Autor(a): On Line Editora<br/>Editora: On Line Editora</p>
                        <img id='esculturas' src={esculturas} alt='Guia, Esculturas e Monumentos' />
                    </div>
                </section>
                <Link to='/trilha9' id='avancar-livros' className='links'>
                    <button>Avançar</button>
                </Link>
            </main>
        );
    }
}

export default Trilhas;