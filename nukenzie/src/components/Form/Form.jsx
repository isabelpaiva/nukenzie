import React, { useState } from "react";
import "./index.css";
import "../../GlobalStyles.css";
import Sum from "../TotalValue";

export const Form = ({ addCardtoCardList }) => {

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "Entrada",
  });

  const submit = (event) => {
    event.preventDefault();

    if (formData.title !== "" && formData.content !== "") {
      addCardtoCardList(formData);
    } else {
      alert("Você precisa preencher os campos para enviar o formulário.");
    }

    setFormData({
      title: "",
      content: "",
      category: "Saída",
    });
  };

  return (
    <form onSubmit={submit} noValidate>
      <label>Descrição</label>
      <input
        placeholder="Digite aqui sua descrição..."
        type="text"
        value={formData.title}
        onChange={(event) =>
          setFormData({ ...formData, title: event.target.value })
        }
      />
      <label>Valor</label>
      <div className="container-value">
        <input
          placeholder="1                          R$"
          className="input-value"
          type="text"
          value={formData.content}
          onChange={(event) =>
            setFormData({ ...formData, content: event.target.value })
          }
        />

        <select
          value={formData.category}
          onChange={(event) =>
            setFormData({ ...formData, category: event.target.value })
          }
        >
          <option value="Entrada">Entrada</option>
          <option value="Saída">Saída</option>
        </select>
      </div>
      <button className="btn-submit" type="submit">
        Inserir Valor
      </button>
    </form>
  );
};