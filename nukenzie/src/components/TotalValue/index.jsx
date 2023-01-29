import "./index.css";

const Sum = ({ todoList }) => {
  const total = todoList.reduce(
    (totalMoney, todo) =>
      todo.category === "Saída"
        ? totalMoney - Number(todo.content)
        : totalMoney + Number(todo.content),
    0
  );

  return (
    <div className="container-sum">
      <div className="container-value-total">
        <h3>Valor total:</h3>
        <div className="container-saldo">
          <p>R$</p>
          <p>{total}</p>
        </div>
      </div>
      <p className="p-value">O valor se refere ao saldo</p>
    </div>
  );
};

export default Sum;
