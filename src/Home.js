import React from 'react';
import './Home.css';
import Header from './Header'

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
        <p className='grid-item'>Trilha Botânica</p>
        <p className='grid-item'>Trilha Monteiro Lobato</p>
        <p className='grid-item'>Trilha Universo</p>
        <p className='grid-item'>Trilha Folclore</p>
        <p className='grid-item'>Trilha Matemática</p>
        <p className='grid-item'>Trilha Experimentos</p>
      </section>

      <h2>Ranking Nacional</h2>

    </main>
  );
}

export default App;
