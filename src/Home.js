import React from 'react';
import './Home.css';
import Header from './Header'
import premios from './assets/premios.jpg';
import pessoas from './assets/pessoas_duvidas.jpg';
import livros from './assets/leia-livros.jpg';

function App() {
  return (
    <main>
      <Header />
      <div id='introduction'>
        <p>
          Seja bem-vindo Miguel José!<br/> A partir de agora você poderá iniciar sua trilha de conhecimento e compartilhá-la com toda sua família!
        </p>
      </div>
    
      <h2>Nossas Trilhas</h2>
      <section id='container'>
        <p className='grid-item' style={{color: '#008000', borderColor: '#008000'}}>Trilha Botânica</p>
        <p className='grid-item' style={{color: '#800080', borderColor: '#800080'}}>Trilha Monteiro Lobato</p>
        <p className='grid-item' style={{color: '#4169E1', borderColor: '#4169E1'}}>Trilha Universo</p>
        <p className='grid-item' style={{color: '#FFA500', borderColor: '#FFA500'}}>Trilha Folclore</p>
        <p className='grid-item' style={{color: '#FF0000', borderColor: '#FF0000	'}}>Trilha Matemática</p>
        <p className='grid-item' style={{color: '#000000', borderColor: '#000000'}}>Trilha Experimentos</p>
      </section>

      <article>
        <h2>Ranking Nacional</h2>
        <img src={premios} alt='Ranking' />
        <img src={pessoas} alt='Dúvidas' />

        <h2>Suas Leituras</h2>
        <img src={livros} alt='Livros Lidos' />
      </article>

    </main>
  );
}

export default App;
