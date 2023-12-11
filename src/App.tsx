import {ChangeEvent, FormEvent, useEffect, useState} from 'react'
import './App.css'
import './Todo.ts'
import {Todo} from "./Todo.ts";
import axios from "axios";
import {Route, Routes} from "react-router";
import TodoGallery from "./Pages/TodoGallery.tsx";

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
    const[description, setDescription] = useState<string>("");

    const fetchTodos = () => {
        axios.get("/api/todo")
            .then(response => setTodos(response.data))
            .catch(err => alert(err.message));
        console.log(todos)
    }
    useEffect(() => {
        fetchTodos()
    }, []);
    const addTodoWithDescritionForm = (text : string) => {
        axios.post("/api/todo",{
            id:null,
            description:text,
            status: "OPEN"
        })
            .then(response => setTodos([...todos,response.data]))
            .catch(err => alert(err.message))
    }
    function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault()
        addTodoWithDescritionForm(description)

    }
  return (
    <>
        <h1>Super Kaban Todo App</h1>
        <TodoGallery todos={todos}/>
        <footer>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                value={description}
                onChange={event => setDescription(event.target.value)}/>
                <button>Submit</button>
            </form>
        </footer>
    </>
  )
}

export default App
