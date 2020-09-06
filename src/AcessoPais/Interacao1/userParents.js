import React from 'react';
import '../styles.css';
import { Link } from 'react-router-dom';
import user from '../../assets/user.jpg';

export function UserParentsChangeColor(){
    return (
        <aside>
            <div id='user'>
                <img src={user} alt='Usuário' />
                <div id='info'>
                    <p>Miguel José, 9 anos</p>
                    <p>00 pontos</p>
                    <Link to='/interacao1' className='links'>
                        <p style={{ color: '#000' }}>Notifições</p>
                    </Link>
                </div>
            </div>
        </aside>
    );
}