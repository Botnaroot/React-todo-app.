import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
    const deletHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    };
    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    };
    return(
        <div className="todo">
            <li className={`todoitem ${todo.completed ? "completed" : ""}`}>{ text }</li>
            <div className="todobtns">
            <button id="completedHandler" onClick={completeHandler} className="complete-btn"></button>
            <button id="deletedHandler" onClick={deletHandler} className="trash-btn"></button>
            </div>
        </div>
    );
}

export default Todo;