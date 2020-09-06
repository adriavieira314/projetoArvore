import React from 'react';
import '../index.css';
import { Header, UserSide } from '../Header'
import premios from '../assets/premios.jpg';
import pessoas from '../assets/pessoas_duvidas.jpg';
import livros from '../assets/leia-livros.jpg';
import { Link } from 'react-router-dom';

function App() {
  return (
    <main>
      <Header />
      <div id='introduction'>
        <p>
          Seja bem-vindo Miguel José!<br/> A partir de agora você poderá iniciar sua trilha de conhecimento e compartilhá-la com toda sua família!
        </p>
      </div>

      <h2 id='trilhas'>Nossas Trilhas</h2>
      <div id='main-div'>
        <UserSide />
        <section id='container'>
          <Link to='/trilha' className='links'>
            <p className='grid-item' style={{color: '#008000', borderColor: '#008000'}}>Trilha Botânica</p>
          </Link>
          <p className='grid-item' style={{color: '#800080', borderColor: '#800080'}}>Trilha Monteiro Lobato</p>
          <p className='grid-item' style={{color: '#4169E1', borderColor: '#4169E1'}}>Trilha Universo</p>
          <p className='grid-item' style={{color: '#FFA500', borderColor: '#FFA500'}}>Trilha Folclore</p>
          <p className='grid-item' style={{color: '#FF0000', borderColor: '#FF0000	'}}>Trilha Matemática</p>
          <p className='grid-item' style={{color: '#000000', borderColor: '#000000'}}>Trilha Experimentos</p>
        </section>
      </div>

      <article id='outer'>
          <div className='footer'>
            <h2>Ranking Nacional</h2>
            <img src={premios} alt='Ranking' />
          </div>

          <div className='footer'>
            <h2>Suas Leituras</h2>
            <img src={livros} alt='Livros Lidos' />
          </div>
      </article>

    </main>
  );
}

export default App;
