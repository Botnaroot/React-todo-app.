import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
    return(
        <div className="todocontainer">
            <ul className="todolist">
                {filteredTodos.map((todo) =>(
                    <Todo 
                    setTodos={setTodos} 
                    todos={todos} 
                    key={todo.id} 
                    todo={todo}
                    text={todo.text}/>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;