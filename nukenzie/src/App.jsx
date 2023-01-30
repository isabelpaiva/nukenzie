import { useState } from "react";
import NuKenziePage from "./pages/PageNuKenzie";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/header";
import HomePage from "./pages/HomePage";

function App() {
  const [todoList, setCardList] = useState([]);
  const [filter, setFilter] = useState("");
  const [mainPage, setmainPage] = useState(true);

  const filterList = todoList.filter((card) => {
    return filter === "" ? true : card.category === filter;
  });

  const addCardtoCardList = (card) => {
    const newCard = { ...card, id: uuidv4() };
    setCardList([...todoList, newCard]);
  };

  const removeCardfromCardList = (cardID) => {
    if (confirm) {
      const newCardList = todoList.filter((todo) => todo.id !== cardID);
      setCardList(newCardList);
    }
  };

  return (
    <>
      {mainPage ? (
        <HomePage setmainPage={setmainPage}></HomePage>
      ) : (
        <div className="App">
          <Header setmainPage={setmainPage}></Header>
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
