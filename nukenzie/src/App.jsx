import { useState } from "react";
import NuKenziePage from "./pages/PageNuKenzie";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/header";
import HomePage from "./pages/HomePage";

function App() {
  const [todoList, setCardList] = useState([]);
  const [filter, setFilter] = useState("");
  const [pagePrincipal, setPagePrincipal] = useState(true);

  const filterList = todoList.filter((todo) => {
    return filter === "" ? true : todo.category === filter;
  });
  console.log(filterList);

  const addCardtoCardList = (todo) => {
    const newTodo = { ...todo, id: uuidv4() };
    setCardList([...todoList, newTodo]);
  };

  const removeTodoFromTodoList = (todoId) => {
    if (confirm) {
      const newTodoList = todoList.filter((todo) => todo.id !== todoId);
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
            removeTodoFromTodoList={removeTodoFromTodoList}
            todoList={todoList}
            setFilter={setFilter}
          />

          <div></div>

          <></>
        </div>
      )}
    </>
  );
}

export default App;
