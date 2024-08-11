import React from 'react'
import './style.css'
import logo from '../../assets/logo.png';

export default function Header() {
  return (
    <header className="container_header">
        <img src={logo} alt="Logotipo do desenvolvedor" className='header_logo'/>
        <li className='header_lista'>
          <ul className="header_lista_item"><a href="" className="header_lista_item_link">Início</a></ul>
          <ul className="header_lista_item"><a href="" className="header_lista_item_link">Sobre</a></ul>
          <ul className="header_lista_item"><a href="" className="header_lista_item_link">Tecnologias</a></ul>
          <ul className="header_lista_item"><a href="" className="header_lista_item_link">Projetos</a></ul>
          <ul className="header_lista_item"><a href="" className="header_lista_item_link_contato">Contato</a></ul>
        </li>
    </header>
  )
}
