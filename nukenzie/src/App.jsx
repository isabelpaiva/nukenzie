import { useState } from "react";
import NuKenziePage from "./pages/PageNuKenzie";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/header";
import HomePage from "./pages/HomePage";

function App() {
  const [todoList, setCardList] = useState([]);
  const [filter, setFilter] = useState("");
  const [pagePrincipal, setPagePrincipal] = useState(true);

  const filterList = todoList.filter((card) => {
    return filter === "" ? true : card.category === filter;
  });
  console.log(filterList);

  const addCardtoCardList = (card) => {
    const newTodo = { ...card, id: uuidv4() };
    setCardList([...todoList, newTodo]);
  };

  const removeCardfromCardList = (cardID) => {
    if (confirm) {
      const newTodoList = todoList.filter((todo) => todo.id !== cardID);
      setCardList(newTodoList);
    }
  };

  return (
    <>
      {pagePrincipal ? (
        <HomePage setPagePrincipal={setPagePrincipal}></HomePage>
      ) : (
        <div className="App">
          <Header setPagePrincipal={setPagePrincipal}></Header>
          <NuKenziePage
            filterList={filterList}
            addCardtoCardList={addCardtoCardList}
            removeCardfromCardList={removeCardfromCardList}
            todoList={todoList}
            setFilter={setFilter}
          />
        </div>
      )}
    </>
  );
}

export default App;
