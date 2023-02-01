import { useState } from "react";
import NuKenziePage from "./pages/PageNuKenzie/NuKenziePage";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";

function App() {
  const [cardList, setCardList] = useState([]);
  const [filter, setFilter] = useState("");
  const [mainPage, setmainPage] = useState(true);

  const filterList = cardList.filter((card) => {
    return filter === "" ? true : card.category === filter;
  });

  const addCardtoCardList = (card) => {
    const newCard = { ...card, id: uuidv4() };
    setCardList([...cardList, newCard]);
  };

  const removeCardfromCardList = (cardID) => {
    if (confirm) {
      const newCardList = cardList.filter((card) => card.id !== cardID);
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
            cardList={cardList}
            setFilter={setFilter}
          />
        </div>
      )}
    </>
  );
}

export default App;
