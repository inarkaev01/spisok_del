import React, {useState} from "react";
import Header from "./Header";
import Form from "./Form";
import Content from "./Content";


function App() {

  const [Todos, setTodos]  = useState([
    {
      text: "Купить бананы",
      favorite: true,
    },
    {
      text: "Снять квартиру",
      favorite: false,
    },
    {
      text: "Переехать в город",
      favorite: true,
    }
  ])
  const [text, setText] = useState(" ");
  const deleteTodo = (DeleteItemTodo) =>{
    const filtered = Todos.filter((todo, index) =>{
      if (index === DeleteItemTodo) {
        return false
      }
      return true

    })
    setTodos(filtered);
  };
  const newFavorite = (itemFavorite) => {
    const favoriteMap = Todos.map((item, index) => {
      if (index === itemFavorite){
        return {
          ...item,
          favorite: !item.favorite,
        }
      }
      return item
    })
    setTodos(favoriteMap);
  }
  const addText = () =>{
    setTodos([
      {text: text,
        favorite: false
      }, ...Todos])
    setText("")
  }

  return (
      <div className="main">
        <Header/>
        <Form text={text} setText={setText} addText={addText}/>
        <Content Todos={Todos} deleteTodo={deleteTodo} newFavorite={newFavorite}/>
      </div>


  );
}

export default App;
