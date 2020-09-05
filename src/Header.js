import React from 'react';
import './Home.css';
import user from './assets/user.jpg';

class Header extends React.Component {
    render() {
        return (
            <header>
                <div id='user'>
                    <img src={user} />
                    <div id='info'>
                        <p>Miguel José, 9 anos</p>
                        <p>00 pontos</p>
                    </div>
                </div>
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
}

export default Header;
