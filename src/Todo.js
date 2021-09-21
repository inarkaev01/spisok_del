import React from 'react';

function Todo(props) {
    return (
            <div className={`todo ${props.item.favorite ? 'active' : ' '}`}>
                    <div className="favorite">
                        <button onClick={() => props.newFavorite(props.index)}>★</button>
                    </div>
                    <div className="text">{props.item.text}</div>
                    <div className="delete" onClick={() => props.deleteTodo(props.index)}>
                        <button>✘</button>
                    </div>
                </div>
    );
}

export default Todo;