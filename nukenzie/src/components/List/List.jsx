import React from "react";
import Card from "./Card";
import "./index.css";
import rectangleempty from "../../assets/rectangleempty.png";
import { NuKenziePage } from "../../pages/PageNuKenzie/NuKenziePage";

export const CardList = ({ filterList, removeCardfromCardList }) => {
  return (
    <ul className="ul-container">
      {filterList.length > 0 ? (
        <>
          <p className="financial">Resumo Financeiro</p>
          {filterList.map((card, index) => (
            <Card
              key={index}
              card={card}
              removeCardfromCardList={removeCardfromCardList}
            />
          ))}
        </>
      ) : (
        <div>
          <div>
            <p className="financial-summary">Resumo Financeiro</p>
          </div>
          <div className="div-container">
            <p className="p-warning" aria-label="alert">
              Você ainda não possui nenhum lançamento
            </p>
            <img className="empty-image" src={rectangleempty}></img>
            <img className="empty-image" src={rectangleempty}></img>
            <img className="empty-image" src={rectangleempty}></img>
          </div>
        </div>
      )}
    </ul>
  );
};


export default CardList