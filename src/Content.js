import React from 'react';
import Todo from "./Todo";

function Content(props) {
    return  (
    <div>
    {props.Todos.map((item, index) => {
     return( <Todo
         key={index}
         item={item}
         index={index}
         Todos={props.Todos}
         deleteTodo={props.deleteTodo}
         newFavorite={props.newFavorite}
     />)
}
        )}
    </div>
    )
}
export default Content;