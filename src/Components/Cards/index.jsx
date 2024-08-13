import React from "react";
import "./style.css";
import BotaoAbrir from "../../assets/abrir.svg";
import Pokedex from "../../assets/projetos/pokedex.png";
import UruBank from "../../assets/projetos/urubank.png";
import Portfolio from "../../assets/projetos/portfolio.png";

export default function Cards() {
  return (
    <>
      <main className="cards">
        <div class="card">
          <p className="card__name">Pokédex</p>
          <a href="https://github.com/GabiBasttos/mobileg6" target="_blank">
            <img src={BotaoAbrir} alt="" className="card__open" />
          </a>
          <img src={Pokedex} alt="" />
          <div class="card__content">
            <p class="card__title">Pokédex</p>
            <p class="card__description">
              Projeto de aplicativo de Pokédex utilizando React Native. O
              projeto foi desenvolvido em grupo e consome a PokéAPI.
            </p>
          </div>
        </div>
        <div class="card">
          <p className="card__name">UruBank</p>
          <a href="https://github.com/renatocrachmad/POO-G4" target="_blank">
            <img src={BotaoAbrir} alt="" className="card__open" />
          </a>
          <img src={UruBank} alt="" />
          <div class="card__content">
            <p class="card__title">UruBank</p>
            <p class="card__description">
              Réplica de sistema bancário, com função de cadastro de clientes e
              diferentes níveis de permissões de acorddo com o cargo.
              Desenvolvido em grupo utilizando Java.
            </p>
          </div>
        </div>
        <div class="card">
          <p className="card__name">Portfólio</p>
          <a href="https://github.com/paulooosf/paulooosf.github.io" target="_blank">
            <img src={BotaoAbrir} alt="" className="card__open" />
          </a>
          <img src={Portfolio} alt="" className="card__image" />
          <div class="card__content">
            <p class="card__title">Portfólio</p>
            <p class="card__description">
              Landing page para servir de portfólio profissional. Desenvolvida
              individualmente utilizando Figma e React.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
