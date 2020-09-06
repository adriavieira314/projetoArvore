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
                        <div id='box'>
                            <img src={duvidas} alt='Hora de Discutir' style={{marginTop: '30px', width: '300px'}} />
                            <p style={{marginTop: '0', fontSize: '25px'}} >Agora é hora de esperar a familia responder também, enquanto isso veja as nossas sugestões de leitura!</p>
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