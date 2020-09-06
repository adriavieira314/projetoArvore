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
                        <a href='https://www2.arvoredelivros.com.br/biblioteca/livro/o-mestre-michelangelo' target='_blank'>
                            <img src={michelangelo} alt='Livro, O mestre Michelangelo' />
                        </a>
                        <p>Autor(a): Giselle Vargas<br/>Editora: Alfa e Beto Soluções<br/>Edição: 1ª ed.</p>
                        <p>Autor(a): On Line Editora<br/>Editora: On Line Editora</p>
                        <a href='https://www2.arvoredelivros.com.br/biblioteca/livro/guia-101-esculturas-e-monumentos' target='_blank'>
                            <img id='esculturas' src={esculturas} alt='Guia, Esculturas e Monumentos' />
                        </a>
                    </div>
                </section>
                <div id='avancar-livros'>
                    <Link to='/trilha9'>
                        <button>Avançar</button>
                    </Link>
                </div> 
            </main>
        );
    }
}

export default Trilhas;