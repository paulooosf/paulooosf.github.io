import React from "react";
import "./intro.css";
import "./sobre.css";
import "./tecnologias.css";
import "./projetos.css";
import Header from "../../Components/Header";
import FotoPrincipal from "../../assets/foto_principal.png";
import FotoSecundaria from "../../assets/foto_secundaria.png";
import Cards from "../../Components/Cards";
import Footer from "../../Components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container">
        <article className="intro">
          <div className="intro_tipografias">
            <p className="intro_tipografias_textos_introducao">Olá!</p>
            <p className="intro_tipografias_textos_introducao">
              O que precisa?
            </p>
            <p className="intro_tipografias_textos_apresentacao">
              Me chamo <span className="destaque">Paulo Henrique</span>, estou
              aqui para desenvolver
            </p>
            <p className="intro_tipografias_textos_apresentacao">
              soluções no back-end e front-end de maneira criativa.
            </p>
            <p className="intro_tipografias_textos_apresentacao">
              <span className="destaque"> Vamos conversar?</span>
            </p>
            <div className="intro_tipografias_botoes">
              <ul className="intro_tipografias_botoes_lista">
                <li className="intro_tipografias_botoes_lista_item">
                  <button className="botao">
                    <a href="https://www.linkedin.com/in/paulooosf/" target="_blank" className="link">
                      LinkedIn
                    </a>
                  </button>
                </li>
                <li className="intro_tipografias_botoes_lista_item">
                  <button className="botao">
                    <a href="#contato" className="link">
                      E-mail
                    </a>
                  </button>
                </li>
                <li className="intro_tipografias_botoes_lista_item">
                  <button className="botao">
                    <a href="https://github.com/paulooosf" target="_blank" className="link">
                      GitHub
                    </a>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <img src={FotoPrincipal} alt="" className="intro_foto" />
        </article>
        <article className="sobre">
          <div className="sobre_titulo" id="sobre">
            <p className="titulo_atras">SOBRE</p>
            <p className="titulo_frente">Quem sou eu?</p>
          </div>
          <div className="sobre_container">
            <img src={FotoSecundaria} alt="" className="sobre_foto" />
            <div className="container_texto">
              <p className="sobre_texto">
                Sou um desenvolvedor FullStack residente no estado do Rio de
                Janeiro, sempre dedicado em aprender e praticar coisas novas.
              </p>
              <p className="sobre_texto">
                Apaixonado por tecnologia e programação, iniciei minha carreira
                no ano de 2024, quando fui aceito no programa de Residência em
                TIC/Software do Serratec. Durante o programa pude aprender os
                fundamentos de diferentes vertentes da programação,
                desenvolvendo desde páginas simples no front-end até APIs
                complexas no Back-End.
              </p>
              <p className="sobre_texto">
                Aliado com isso, atualmente eu estou cursando Análise e
                Desenvolvimento de Sistemas na FIAP, com previsão de formação
                para 2026.
              </p>
              <p className="sobre_texto">
                Minha principal missão de vida é auxiliar na construção de um
                futuro onde a tecnologia seja a maior aliada das pessoas,
                fazendo com que nossa vida seja cada vez mais prática.
              </p>
            </div>
          </div>
        </article>
        <article className="tecnologias">
          <p className="tecnologias_titulo" id="tecnologias">
            Tecnologias
          </p>
          <p className="tecnologias_texto">
            Possuo maior proficiência com a linguagem Java, porém domino
            diferentes tecnologias em diferentes setores da programação.
          </p>
          <div className="tecnologias_icones">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
              alt="html5"
              height="80px"
              width="80px"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
              alt="css3"
              height="80px"
              width="80px"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
              alt="git"
              height="80px"
              width="80px"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
              alt="java"
              height="80px"
              width="80px"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"
              alt="spring"
              height="80px"
              width="80px"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
              alt="javascript"
              height="80px"
              width="80px"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
              alt="typescript"
              height="80px"
              width="80px"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
              alt="react"
              height="80px"
              width="80px"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
              alt="postgresql"
              height="80px"
              width="80px"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
              alt="python"
              height="80px"
              width="80px"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg"
              alt="photoshop"
              height="80px"
              width="80px"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
              alt="figma"
              height="80px"
              width="80px"
            />
          </div>
        </article>
        <article className="projetos">
          <p className="projetos_titulo" id="projetos">
            Projetos
          </p>
          <Cards />
        </article>
        <Footer />
      </main>
    </>
  );
}
