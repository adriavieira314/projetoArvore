import React from 'react';
import { Header, UserSide } from '../../Header';
import { Link } from 'react-router-dom';
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
                            <p style={{textAlign: 'center', fontSize: '25px'}}>Quais os dois tipos de escultura<br/>citados anteriormente?</p>
                            <ol>
                                <li>Figurativas e Esculpidas</li>
                                <li>Talhadas e Abstratas</li>
                                <li>Abstratas e Figurativas</li>
                                <li>Talhadas e Esculpidas</li>
                            </ol>
                        </div>
                        <div id='confirmar'>
                            <Link to='/trilha5'>
                                <button>Confirmar</button>
                            </Link>
                        </div> 
                    </div>
                </section>
            </main>
        );
    }
}

export default Trilhas;