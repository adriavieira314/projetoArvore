import React from 'react';
import { Header, UserSide } from '../../Header';
import { Link } from 'react-router-dom';
import discurso from '../../assets/discurso.jpg';

class Trilhas extends React.Component {
    
    render() {
        return (
            <main>
                <Header />
                <section id='inicio-trilha'>
                    <UserSide />
                    <div id='conteudo'>
                        <div id='box'>
                            <img src={discurso} alt='Hora de Discutir' style={{marginTop: '20px'}} />
                            <p style={{marginTop: '0'}} >Vamos testar seus conhecimentos?</p>
                        </div>
                        <div id='voltar-avancar'>
                            <Link to='/trilha2'>
                                <button>Voltar</button>
                            </Link>
                            <Link to='/trilha4'>
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