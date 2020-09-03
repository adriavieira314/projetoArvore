import React from 'react';
import './Home.css';

function App() {
  return (
    <main>
      <header>
        <ul>
          <li>Sobre nós</li>
          <li>Nossas Trilhas</li>
          <li>Entrar</li>
        </ul>
      </header>

      <section id='container'>
        <p className='grid-item'>Trilha Botânica</p>
        <p className='grid-item'>Trilha Monteiro Lobato</p>
        <p className='grid-item'>Trilha Universo</p>
        <p className='grid-item'>Trilha Folclore</p>
        <p className='grid-item'>Trilha Matemática</p>
        <p className='grid-item'>Trilha Experimentos</p>
      </section>
      
    </main>
  );
}

export default App;
