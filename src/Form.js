import React from 'react';

function Form(props) {
    return (
        <div className="form">
            <input
                type="text"
                placeholder="Введите текст"
                value = {props.text}
                onChange={(e) => props.setText (e.target.value)}
            />
            <button onClick={props.addText}>Добавить</button>
        </div>
    );
}

export default Form;