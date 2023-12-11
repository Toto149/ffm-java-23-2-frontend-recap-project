import {useEffect, useState} from 'react'
import './App.css'
import './Todo.ts'
import {Todo} from "./Todo.ts";
import axios from "axios";
import {Route, Routes} from "react-router";

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
        <div>
            {todos.map(todo =>(
                <div key={todo.id}>
                    <h5>{todo.status}</h5>
                    <p>
                        {todo.description}
                    </p>
                </div>
            ))}
        </div>
    </>
  )
}

export default App
