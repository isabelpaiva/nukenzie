import React from "react";
import Card from "./Card";
import "./index.css";
import rectangleempty from "../../assets/rectangleempty.png";

export const CardList = ({ filterList, removeTodoFromTodoList }) => {
  return (
    <ul>
      {filterList.length > 0 ? (
        <>
          {filterList.map((todo, index) => (
            <Card
              key={index}
              todo={todo}
              removeTodoFromTodoList={removeTodoFromTodoList}
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
