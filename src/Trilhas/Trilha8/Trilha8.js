import React from 'react';
import { Header, UserSide } from '../../Header';
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
                            <p>Preciso fazer</p>
                        </div>
                        <div style={{justifyContent: 'center'}} id='voltar-avancar'>
                            <Link to='/trilha9'>
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