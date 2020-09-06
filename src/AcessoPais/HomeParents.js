import React from 'react';
import './styles.css';
import { HeaderParents, UserSideParents } from './AcessoPais'
import premios from '../assets/premios.jpg';
import livros from '../assets/leia-livros.jpg';
import estatistica from '../assets/estatistica.jpg';
// import { Link } from 'react-router-dom';
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from "react-icons/io";

function App() {
  return (
    <main>
        <HeaderParents />
        <div id='introduction'>
          <p>Olá, Família Alencar!</p>
        </div>
        <div id='main-div'>
          <UserSideParents />
          <div id='estatistica'>
            <div id='info'>
              <p>Trilhas iniciadas até o momento: 1/6</p>
              <p>Trilhas iniciadas até o momento: 1/6</p>
              <p>Quantidades de perguntas e acertos: 2/1</p>
            </div>
            <img src={estatistica} />
          </div>          
        </div>

        <section id='trilhas'>
          <IoMdArrowDropleftCircle className='icons'/>
          <p className='item' style={{color: '#008000', borderColor: '#008000'}}>Trilha Universo</p>
          <p className='item' style={{color: '#800080', borderColor: '#800080'}}>Trilha Matemática</p>
          <p className='item' style={{color: '#4169E1', borderColor: '#4169E1'}}>Trilha Experimentos</p>
          <IoMdArrowDroprightCircle className='icons' />
        </section>

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
