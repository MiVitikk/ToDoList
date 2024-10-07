import { useState } from "react";
import TodoTable from "./TodoTable";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Container from '@mui/material/Container';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo]  = useState({
        desc: '',
        priority: '',
        date: ''
    })
    

    const newInput = (event) => {
        setNewTodo({...newTodo, [event.target.name]: event.target.value});
        
        
        
    };
    
    const addTodo = () => {
        if (!newTodo.desc || !newTodo.date){
            alert('Write a description and date for a todo item')
            return;
        }
        
        setTodos([...todos, newTodo]);
        setNewTodo({desc:'', priority:'', date:''})
        
        

        
    };
    

    const [selectedTodoIndex, setSelectedTodoIndex] = useState(null);

    
    const removeTodo = () => {
        if (selectedTodoIndex !== null) {  
            setTodos((prevTodos) => prevTodos.filter((todo, i) => i !== parseInt(selectedTodoIndex)));
            setSelectedTodoIndex(null);
        } else {
            alert('Select a row first!');
        }
    };

    return (
        
        <>
        <div id="ToDoHeader">
            <header><b>Simple Todolist</b></header>
        </div>
        <fieldset id="ToDoInput">
            <legend>Add Todo</legend>
            <input type="text" placeholder="Description" name="desc" onChange={newInput} value={newTodo.desc} />
            <input type="text" placeholder="Priority" name="priority" onChange={newInput} value={newTodo.priority}/>
            <input type="date" placeholder="Date" name="date" onChange={newInput} value={newTodo.date}/>
            <button onClick={addTodo}>Add</button>
            <button onClick={removeTodo}>Delete</button>
        </fieldset>
            <TodoTable todos={todos} setSelectedTodoIndex={setSelectedTodoIndex}/>
            
        </>
    );
}

export default TodoList;