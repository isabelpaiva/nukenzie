import React from "react";
import "./index.css";

import { FaTrash } from "react-icons/fa";

export const Card = ({ todo, removeCardfromCardList }) => {
  if (todo.category == "Entrada") {
    return (
      <li className="card border-entrada">
        <div className="card-left">
          <h3>{todo.title}</h3>
          <span> {todo.category}</span>
        </div>
        <div className="card-rigth">
          <p className="valor"> R$: {todo.content}</p>
          <button
            className="button-remove"
            onClick={() => removeCardfromCardList(todo.id)}
          >
            <FaTrash />
          </button>
        </div>
      </li>
    );
  } else if (todo.category == "Saída") {
    return (
      <div>
        <li className="card border-saida">
          <div className="card-left">
            <h3>{todo.title}</h3>
            <span> {todo.category}</span>
          </div>
          <div className="card-rigth">
            <p className="valor"> R$: {todo.content}</p>
            <button
              className="button-remove"
              onClick={() => removeCardfromCardList(todo.id)}
            >
              <FaTrash />
            </button>
          </div>
        </li>
      </div>
    );
  }
};
