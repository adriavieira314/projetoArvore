import React from 'react';
import './Home.css';

class Header extends React.Component {
    render() {
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
}

export default Header;
