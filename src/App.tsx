import {useEffect, useState} from 'react'
import './App.css'
import './Todo.ts'
import {Todo} from "./Todo.ts";
import axios from "axios";
import {Route, Routes} from "react-router";
import TodoGallery from "./Pages/TodoGallery.tsx";

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

    const fetchTodos = () => {
        axios.get("/api/todo")
            .then(response => setTodos(response.data))
            .catch(err => alert(err.message));
        console.log(todos)
    }
    useEffect(() => {
        fetchTodos()
    }, []);

  return (
    <>

        <TodoGallery todos={todos}/>
    </>
  )
}

export default App
