import React from 'react';
import './Home.css';
import Header from './Header'

function App() {
  return (
    <main>
      <Header />

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
