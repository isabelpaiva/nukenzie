import React from "react";
import Card from "./Card";
import "./index.css";
import rectangleempty from "../../assets/rectangleempty.png";
import { NuKenziePage } from "../../pages/PageNuKenzie/NuKenziePage";

export const CardList = ({ filterList, removeCardfromCardList }) => {
  return (
    <ul>
   
        

       
      {filterList.length > 0 ? (
         
        <>
         <p className="financial">Resumo Financeiro</p>
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
          <div>
          <p className="financial-summary">Resumo Financeiro</p>

          </div>
          <div>
            
          </div>
          <p className="p-warning" aria-label="alert">
            Você ainda não possui nenhum lançamento
          </p>
          <img className="empty-image" src={rectangleempty}></img>
          <img className="empty-image" src={rectangleempty}></img>
          <img className="empty-image" src={rectangleempty}></img>
        </div>
      )}
    </ul>
  );
};
