import React from 'react';
import { Header, UserSide } from '../Header';
import './trilha.css';

class Trilha extends React.Component {
    render() {
        return (
            <main>
                <Header />
                <section id='inicio-trilha'>
                    <UserSide />
                    <div id='conteudo'>
                        <div id='box'>
                            <p>Bem-vindo à Trilha Experimentos!</p>
                        </div>
                        <button>Começar</button>
                    </div>
                    
                </section>
            </main>
        );
    }
}

export default Trilha;