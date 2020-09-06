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
                            <p className='texto'>Você sabia que a maior escultura do mundo tem 182 metros de altura? O nome dela é Estátua da Unidade e fica em Gujarat, na India e foi construída com ferro e bronze.</p>
                            <p className='texto'>A altura dela é igual a um prédio de 50 andares e quase cinco vezes maior que a estátua do Cristo Redentes, uma das esculturas mais famosas do mundo que fica no no Rio de Janeiro, aqui no Brasil!</p>
                        </div>
                        <div style={{justifyContent: 'flex-end'}} id='voltar-avancar'>
                            <Link to='/trilha6'>
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