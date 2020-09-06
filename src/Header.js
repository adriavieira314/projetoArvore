import React from 'react';
import './index.css';
import user from './assets/user.jpg';
import { Link } from 'react-router-dom';

export function UserSide(){
    return (
        <aside>
            <div id='user'>
                <img src={user} alt='Usuário' />
                <div id='info'>
                    <p>Miguel José, 9 anos</p>
                    <p>00 pontos</p>
                </div>
            </div>
        </aside>
    );
}

export function Header() {
    return (
        <header>
            <ul>
                <Link to='/' className='links'>
                    <li>Início</li>
                </Link>
                <li>Banca</li>
                <li>Monte seu Time</li>
                <li>Dúvidas</li>
                <Link to='acesso-pais' className='links'>
                    <li>Usuário</li>
                </Link>
            </ul>
        </header>
    );
}