import { useState } from "react";
import TodoTable from "./TodoTable";

function TodoList() {
    const [desc, setDesc] = useState("");
    const [todos, setTodos] = useState([]);
    const [date, setDate] = useState("");
    

    const handleDesc = (event) => {
        setDesc(event.target.value);
        
        
        
    };
    const handleDate =(event) =>{
        setDate(event.target.value);
        
        
        
    }
    const addTodo = () => {
        if (!desc || !date){
            alert('Write a description and date for a todo item')
            return;
        }

        const newItem = {
            date1: date,
            desc1: desc
        }
        
        
        setTodos((prevTodos) => [...todos, newItem]);
        
        setDesc("")
        setDate("")
        
        
        
        
        
        
    };

    const removeTodo = (index) => {
        setTodos((prevTodos) => prevTodos.filter((todo, i) => i !== index));
    };

    return (
        
        <>
        <div id="ToDoHeader">
            <header><b>Simple Todolist</b></header>
        </div>
        <fieldset id="ToDoInput">
            <legend>Add Todo</legend>
            <input placeholder="Description" onChange={handleDesc} value={desc} />
            <input placeholder="Date" onChange={handleDate} value={date}/>
            <button onClick={addTodo}>Add</button>
        </fieldset>
            <TodoTable todos={todos} removeTodo={removeTodo}/>
            
        </>
    );
}

export default TodoList;