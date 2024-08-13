import React from 'react'
import './style.css'
import logo from '../../assets/logo.png';

export default function Header() {
  return (
    <header className="container_header" id='inicio'>
        <img src={logo} alt="Logotipo do desenvolvedor" className='header_logo'/>
        <ul className='header_lista'>
          <li className="header_lista_item"><a href="#inicio" className="header_lista_item_link">Início</a></li>
          <li className="header_lista_item"><a href="#sobre" className="header_lista_item_link">Sobre</a></li>
          <li className="header_lista_item"><a href="#tecnologias" className="header_lista_item_link">Tecnologias</a></li>
          <li className="header_lista_item"><a href="#projetos" className="header_lista_item_link">Projetos</a></li>
          <li className="header_lista_item"><a href="#contato" className="header_lista_item_link_contato">Contato</a></li>
        </ul>
    </header>
  )
}
