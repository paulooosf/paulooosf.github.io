import React from 'react'
import './styles.css'
import Header from '../../Components/Header'
import FotoPrincipal from '../../assets/foto_principal.jpg'

export default function Home() {
  return (
    <>
    <Header/>
    <main className="container">
      <article className="intro">
        <div className="intro_tipografias">
            <p className="intro_tipografias_textos_introducao">Olá!</p>
            <p className="intro_tipografias_textos_introducao">O que precisa?</p>
            <p className="intro_tipografias_textos_apresentacao">Me chamo <span className="destaque">Paulo Henrique</span>, estou aqui para desenvolver 
            </p>
            <p className="intro_tipografias_textos_apresentacao">soluções criativas. <span className="destaque"> Vamos conversar?</span></p>
          <div className="intro_tipografias_botoes">
            <ul className='intro_tipografias_botoes_lista'>
              <li className='intro_tipografias_botoes_lista_item'><a href="" className="intro_tipografias_botoes_lista_item_link">LinkedIn</a></li>
              <li className='intro_tipografias_botoes_lista_item'><a href="" className="intro_tipografias_botoes_lista_item_link">E-mail</a></li>
              <li className='intro_tipografias_botoes_lista_item'><a href="" className="intro_tipografias_botoes_lista_item_link">GitHub</a></li>
            </ul>
          </div>
        </div>
        <img src={FotoPrincipal} alt="" className='intro_foto'/>
      </article>
    </main>
    </>
  )
}
