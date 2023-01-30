import React from "react";
import Card from "./Card";
import "./index.css";
import rectangleempty from "../../assets/rectangleempty.png";

export const CardList = ({ filterList, removeCardfromCardList }) => {
  return (
    <ul>
      {filterList.length > 0 ? (
        <>
          {filterList.map((todo, index) => (
            <Card
              key={index}
              todo={todo}
              removeCardfromCardList={removeCardfromCardList}
            />
          ))}
        </>
      ) : (
        <div>
          <p className="resumoFinanceiro">Resumo Financeiro</p>
          <p className="p-warning" aria-label="alert">
            Você ainda não possui nenhum lançamento
          </p>
          <img className="imagem-vazia" src={rectangleempty}></img>
          <img className="imagem-vazia" src={rectangleempty}></img>
          <img className="imagem-vazia" src={rectangleempty}></img>
        </div>
      )}
    </ul>
  );
};
