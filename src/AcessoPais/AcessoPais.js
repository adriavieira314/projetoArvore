import React from 'react';
import './styles.css';
import user from '../assets/user.jpg';
import { Link } from 'react-router-dom';

export function HeaderParents() {
    return (
        <header>
            <div id='pesquisa'>
                <input type='text' placeholder='Pesquise pelo autor, título, categoria e etc' />
            </div>
            <ul>
                <Link to='/' className='links'>
                    <li>Início</li>
                </Link>
                <li>Banca</li>
                <li>Dúvidas</li>
                <li>Usuário</li>
            </ul>
        </header>
    );
}

export function UserSideParents(){
    return (
        <aside>
            <div id='user'>
                <img src={user} alt='Usuário' />
                <div id='info'>
                    <p>Miguel José, 9 anos</p>
                    <p>00 pontos</p>
                    <p>Notifições</p>
                </div>
            </div>
        </aside>
    );
}