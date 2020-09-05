import React from 'react';
import './Home.css';
import user from './assets/user.jpg';

export function UserSide(){
    return (
        <aside>
            <div id='user'>
                <img src={user} alt='teste' />
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
                <li>Início</li>
                <li>Banca</li>
                <li>Monte seu Time</li>
                <li>Dúvidas</li>
                <li>Usuário</li>
            </ul>
        </header>
    );
}