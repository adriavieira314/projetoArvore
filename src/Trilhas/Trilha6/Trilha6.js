import React from 'react';
import { Header } from '../../Header';
import { UserPoints } from '../Trilha5/userPoints';
import { Link } from 'react-router-dom';

class Trilhas extends React.Component {
    render() {
        return (
            <main>
                <Header />
                <section id='inicio-trilha'>
                    <UserPoints />
                    <div id='conteudo'>
                        <div id='box-texto'>
                            <p className='texto'>No Brasil também existem diversas esculturas muito importantes. Na cidade do Rio de Janeiro/RJ temos a esculta Cristo Redentor, inaugurada em 1931 e é feita com concreto e pedra, pesando 1145 toneladas.</p>
                            <p className='texto'>Outra estátua muito famosa no Brasil é a de Carlos Drummond de Andrade, um grande poeta brasileiro e também fica no Rio de Janeiro! Temos também, no municipio de Armação de Buzios, a escultura Três Pescadores, localizada em uma região rochosa a beira-mar, considerada uma das esculturas mais belas do mundo.</p>
                        </div>
                        <div style={{justifyContent: 'flex-end'}} id='voltar-avancar'>
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