import "./index.css";

const Sum = ({ todoList }) => {
  const total = todoList.reduce(
    (totalMoney, card) =>
      card.category === "Saída"
        ? totalMoney - Number(card.content)
        : totalMoney + Number(card.content),
    0
  );

  return (
    <div className="container-sum">
      <div className="container-value-total">
        <h3>Valor total:</h3>
        <div className="container-balance">
          <p>R$</p>
          <p>{total}</p>
        </div>
      </div>
      <p className="p-value">O valor se refere ao saldo</p>
    </div>
  );
};

export default Sum;
