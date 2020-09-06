import React from 'react';
import { HeaderParents } from '../AcessoPais';
import { UserParentsChangeColor } from '../Interacao1/userParents';
import './style.css';
import { Link } from 'react-router-dom';


class Trilhas extends React.Component {
    
    render() {
        return (
            <main>
                <HeaderParents />
                <section id='inicio-interacao'>
                    <UserParentsChangeColor />
                    <div id='conteudo-interacao'>
                        <div id='box-interacao'>
                            <p className='pergunta'>No Eixo Monumental, no municipio de Brasília, está localizada a esculta de ____________________________, homenageando o presidente brasileira e sua esposa.</p>
                            <form className='check'>  
                                <label>
                                    <input type="radio"  id='juscelino' name='presidentes' checked />
                                    Juscelino Kubistchek
                                </label>
                                <label>
                                    <input type="radio" id='getulio' name='presidentes' />
                                    Getúlio Vargas    
                                </label>
                            </form>

                            <p className='pergunta'>Em memória a um dos maiores poetas brasileiros Carlos Drummond de Andrade, foi feita uma escultura que esta localizada na ________________________ no Rio de Janeiro.</p>
                            <form className='check'>  
                                <label>
                                    <input type="radio" id='copacabana' name='praias' checked />
                                    Orla de Copacabana    
                                </label>
                                <label>
                                    <input type="radio" id='ipanema' name='praias' />
                                    Praia de Ipanema    
                                </label>
                            </form>
                        </div>

                        <Link to='/interacao3'>
                            <button>Validar</button>
                        </Link>
                    </div>
                    
                </section>
            </main>
        );
    }
}

export default Trilhas;