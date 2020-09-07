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
                <Link to='/' className='links'>
                    <li>Aluno</li>
                </Link>
            </ul>
        </header>
    );
}

class UserSideParents extends React.Component {
    render() {
        return (
            <aside>
                <div id='user'>
                    <img src={user} alt='Usuário' />
                    <div id='info'>
                        <p>Miguel José, 9 anos</p>
                        <p>00 pontos</p>
                        <Link to='/interacao1' className='links'>
                            <p style={{ color: '#F33A3A' }}>Notifições</p>
                        </Link>
                    </div>
                </div>
            </aside>
        );
    }
}

export default UserSideParents;