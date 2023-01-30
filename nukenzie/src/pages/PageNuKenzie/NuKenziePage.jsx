import React, { useState } from "react";
import Form from "../../components/Form";
import CardList from "../../components/List";
import Sum from "../../components/TotalValue";
import "./index.css";

export const NuKenziePage = ({
  filterList,
  addCardtoCardList,
  removeCardfromCardList,
  setFilter,
  todoList,
}) => {
  return (
    <div class="container-form">
      <div>
        <Form addCardtoCardList={addCardtoCardList} />
        <Sum todoList={todoList}></Sum>
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

          <CardList
            filterList={filterList}
            removeCardfromCardList={removeCardfromCardList}
          />
        </ul>
      </div>
    </div>
  );
};
