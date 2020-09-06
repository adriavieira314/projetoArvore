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
                            <p className='texto'>Veja o que a sua família descobriu para você!</p>
                            <p className='texto'>No Eixo Monumental, no municipio de Brasília, está localizada a escultura de Juscelino Kubistchek de Oliveira, homenageando o presidente brasileira e sua esposa.</p>
                            <p className='texto'>Em memória a um dos maiores poetas brasileiros Carlos Drummond de Andrade, foi feita uma escultura que esta localizada na orla de Copacabana no Rio de Janeiro.</p>
                        </div>
                        <div id='voltar-avancar'>
                            <Link to='/trilha8'>
                                <button>Voltar</button>
                            </Link>
                            <Link to='/trilha10'>
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