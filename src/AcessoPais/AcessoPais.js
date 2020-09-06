import React from 'react';
import './styles.css';
import user from '../assets/user.jpg';
import { Link } from 'react-router-dom';
import { IoMdSearch } from "react-icons/io";

export function HeaderParents() {
    return (
        <header>
            <div id='pesquisa'>
                <input type='text' placeholder='Pesquise pelo autor, título, categoria e etc' />
                <label>
                    <IoMdSearch id='search-icon' size='1.5em' />
                </label>
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
                    <Link to='/interacao1'>
                        <p>Notifições</p>
                    </Link>
                </div>
            </div>
        </aside>
    );
}