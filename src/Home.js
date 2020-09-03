import React from 'react';
import './Home.css';
import image from './assets/criancas.png';

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

      <div id='image-footer'>
        <img src={image} alt="Crianças"/>
      </div>
    </main>
  );
}

export default App;
