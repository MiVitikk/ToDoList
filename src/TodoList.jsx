import { useState } from "react";
import TodoTable from "./TodoTable";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState({
        desc: '',
        priority: '',
        date: null
    })


    const newInput = (event) => {
        setNewTodo({ ...newTodo, [event.target.name]: event.target.value });



    };
    const handleDate = (newDate) => {
        setNewTodo({ ...newTodo, date: newDate });
    };

    const addTodo = () => {
        if (!newTodo.desc || !newTodo.date) {
            alert('Write a description and date for a todo item')
            return;
        }

        setTodos([...todos, newTodo]);
        setNewTodo({ desc: '', priority: '', date: null })




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

    const removeAllTodos = () => {
        if (todos != null){
            setTodos([])
        }
    }

    return (

        <>
            

            <fieldset id="ToDoInput">
            <legend>Add Todo</legend>
                <Stack
                    spacing={2}
                    mt={2}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    >
                    
                    <TextField label="Description" placeholder="Description" onChange={newInput} name="desc" value={newTodo.desc} />
                    <TextField label="Priority" placeholder="Priority" onChange={newInput} name="priority" value={newTodo.priority} />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="Date"
                            placeholder="Date"
                            value={newTodo.date}
                            onChange={handleDate}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                    <Button variant="contained" color="gray" onClick={addTodo}>Add</Button>
                    <Button variant="contained" color="gray" onClick={removeTodo}>Delete</Button>
                    <Button variant="contained" color="gray" onClick={removeAllTodos}>Clear</Button>
                </Stack>
            </fieldset>

            <TodoTable todos={todos} setSelectedTodoIndex={setSelectedTodoIndex} />

        </>
    );
}

export default TodoList;