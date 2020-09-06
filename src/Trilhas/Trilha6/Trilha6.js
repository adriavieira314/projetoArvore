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
                            <p className='texto'>No Brasil também existem diversas esculturas muito importantes. Na cidade do Rio de Janeiro/RJ temos a esculta Cristo Redentor, inaugurada em 1931 e é feita com concreto e pedra, pesando 1145 toneladas.</p>
                            <p className='texto'>Outra estátua muito famosa no Brasil é a de Carlos Drummond de Andrade, um grande poeta brasileiro e também fica no Rio de Janeiro! Temos também, no municipio de Armação de Buzios, a escultura Três Pescadores, localizada em uma região rochosa a beira-mar, considerada uma das esculturas mais belas do mundo.</p>
                        </div>
                        <div id='voltar-avancar'>
                            <Link to='/trilha5'>
                                <button>Voltar</button>
                            </Link>
                            <Link to='/trilha7'>
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