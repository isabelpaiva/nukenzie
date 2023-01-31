import React, { useState } from "react";
import Form from "../../components/Form/Form";
import CardList from "../../components/List/List";
import Sum from "../../components/TotalValue";
import "./index.css";

export const NuKenziePage = ({
  filterList,
  addCardtoCardList,
  removeCardfromCardList,
  setFilter,
  cardList,
}) => {
  return (
    <div class="container-form">
      <div className="div-description">
        <Form addCardtoCardList={addCardtoCardList} />
        <Sum cardList={cardList}></Sum>
      </div>

      <div className="div-cards">
        <ul className="container-right">
          <div className="div-filter">
            <button className="btn-filter" onClick={() => setFilter("")}>
              Todos
            </button>
            <button className="btn-filter" onClick={() => setFilter("Entrada")}>
              Entradas
            </button>
            <button className="btn-filter" onClick={() => setFilter("Saída")}>
              Saídas
            </button>
          </div>
        </ul>
        <CardList
          filterList={filterList}
          removeCardfromCardList={removeCardfromCardList}
        />
      </div>
    </div>
  );
};


export default NuKenziePage;
