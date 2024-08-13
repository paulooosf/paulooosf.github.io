import React from "react";
import "./style.css";
import logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer className="container_footer" id="contato">
      <div className="container_contato">
        <p className="contato">Telefone: +55 (24) 98159-6087</p>
        <p className="contato">E-mail: paulooosf@gmail.com</p>
      </div>
      <div className="footer_botoes">
        <ul className="footer_botoes_lista">
          <li className="footer_botoes_lista_item">
            <button className="botao">
              <a href="https://www.linkedin.com/in/paulooosf/" target="_blank" className="link">
                LinkedIn
              </a>
            </button>
          </li>
          <li className="footer_botoes_lista_item">
            <button className="botao">
              <a href="https://github.com/paulooosf" target="_blank" className="link">
                GitHub
              </a>
            </button>
          </li>
        </ul>
      </div>
      <p className="ano">2024</p>
    </footer>
  );
}
