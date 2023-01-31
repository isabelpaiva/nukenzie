import React from "react";
import "./index.css";

import { FaTrash } from "react-icons/fa";

export const Card = ({ card, removeCardfromCardList }) => {
  if (card.category == "Entrada") {
    return (
      <li className="card border-entrada">
        <div className="card-left">
          <h3 className="h3-title">{card.title}</h3>
          <span> {card.category}</span>
        </div>
        <div className="card-rigth">
          <p className="valor"> R$: {card.content}</p>
          <button
            className="button-remove"
            onClick={() => removeCardfromCardList(card.id)}
          >
            <FaTrash />
          </button>
        </div>
      </li>
    );
  } else if (card.category == "Saída") {
    return (
      <div>
        <li className="card border-saida">
          <div className="card-left">
            <h3 className="h3-title">{card.title}</h3>
            <span> {card.category}</span>
          </div>

          <li className="card-rigth">
            <p className="valor"> R$: {card.content}</p>
            <button
              className="button-remove"
              onClick={() => removeCardfromCardList(card.id)}
            >
              <FaTrash />
            </button>
          </li>
        </li>
      </div>
    );
  }
};
