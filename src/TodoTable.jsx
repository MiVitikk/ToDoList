import React from "react";

import TodoList from "./TodoList";

function TodoTable({todos, removeTodo}) {
    
    return (
        <table rules="rows">
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {todos.map((todo, index) => (
                    <tr key={index}>
                        <td>{todo.desc1}</td>
                        <td>{todo.date1}</td>
                        <td><button onClick={() => removeTodo(index)}>Remove</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );


    
}

export default TodoTable;