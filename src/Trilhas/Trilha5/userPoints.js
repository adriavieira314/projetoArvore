import React from 'react';
import '../../index.css';
import user from '../../assets/user.jpg';

export function UserPoints(){
    return (
        <aside>
            <div id='user'>
                <img src={user} alt='Usuário' />
                <div id='info'>
                    <p>Miguel José, 9 anos</p>
                    <p>10 pontos</p>
                </div>
            </div>
        </aside>
    );
}