import React from "react";
import "./style.css";
import BotaoAbrir from "../../assets/abrir.svg";
import Pokedex from "../../assets/projetos/pokedex.png";
import GameboXed from "../../assets/projetos/gameboxed.png"
import Portfolio from "../../assets/projetos/portfolio.png";

export default function Cards() {
  return (
    <main className="cards">
      <div className="card">
        <p className="card__name">Pokédex</p>
        <a href="https://github.com/GabiBasttos/mobileg6" target="_blank">
          <img src={BotaoAbrir} alt="" className="card__open" />
        </a>
        <img src={Pokedex} alt="" />
        <div className="card__content">
          <p className="card__title">Pokédex</p>
          <p className="card__description">
            Projeto de aplicativo de Pokédex utilizando React Native. O
            projeto foi desenvolvido em grupo e consome a PokéAPI.
          </p>
        </div>
      </div>
      <div className="card">
        <p className="card__name">GameboXed</p>
        <a href="https://github.com/paulooosf/gameboxed-front" target="_blank">
          <img src={BotaoAbrir} alt="" className="card__open" />
        </a>
        <img src={GameboXed} alt="" className="card__image"/>
        <div className="card__content">
          <p className="card__title">GameboXed</p>
          <p className="card__description">
            Projeto FullStack de uma plataforma de avaliação de jogos, desenvolvido 
            individualmente utilizando React e Spring Boot.
          </p>
        </div>
      </div>
      <div className="card">
        <p className="card__name">Portfólio</p>
        <a href="https://github.com/paulooosf/paulooosf.github.io" target="_blank">
          <img src={BotaoAbrir} alt="" className="card__open" />
        </a>
        <img src={Portfolio} alt="" className="card__image" />
        <div className="card__content">
          <p className="card__title">Portfólio</p>
          <p className="card__description">
            Landing page para servir de portfólio profissional. Desenvolvida
            individualmente utilizando Figma e React.
          </p>
        </div>
      </div>
    </main>
  );
}
