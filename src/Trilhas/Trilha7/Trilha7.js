import React from 'react';
import { Header, UserSide } from '../../Header';
import { Link } from 'react-router-dom';
import duvidas from '../../assets/pessoas_duvidas.jpg';

class Trilhas extends React.Component {
    
    render() {
        return (
            <main>
                <Header />
                <section id='inicio-trilha'>
                    <UserSide />
                    <div id='conteudo'>
                        <div id='box-texto'>
                            <img src={duvidas} alt='Hora de Discutir' style={{marginTop: '30px', width: '300px', alignSelf: 'flex-start'}} />
                            <p className='texto'>Agora é hora de esperar a familia responder também, enquanto isso veja as nossas sugestões de leitura!</p>
                        </div>
                        <div style={{justifyContent: 'flex-end'}} id='voltar-avancar'>
                            <Link to='/trilha8'>
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