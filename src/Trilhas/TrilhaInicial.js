import React from 'react';
import { Header, UserSide } from '../Header';
import './trilha.css';
import { Link } from 'react-router-dom';

class Trilha extends React.Component {
    render() {
        return (
            <main>
                <Header />
                <section id='inicio-trilha'>
                    <UserSide />
                    <div id='conteudo'>
                        <div id='box-texto'>
                            <p  className='texto'>Bem-vindo à Trilha Experimentos!</p>
                            <p  className='texto'>Eixo trabalhando: Artes Visuais</p>
                            <p  className='texto'>Objetivo de aprendizagem: conhecer e apreciar obras e produções visuais. Investigar tridimensionalidade na arte</p>
                        </div>
                        <Link to='/trilha1'>
                            <button>Começar</button>
                        </Link>
                    </div>
                    
                </section>
            </main>
        );
    }
}

export default Trilha;