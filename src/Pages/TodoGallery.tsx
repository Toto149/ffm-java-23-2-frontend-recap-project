import {Todo} from "../Todo.ts";
import TodoCard from "../TodoCard.tsx";
import "./TodoGallery.css"

export type propTodos = {

    todos: Todo[]

}
export default function TodoGallery(props: propTodos){
    return(
        <><div class="container">

            <div class="statusContainer">
                <h2>Open</h2>
                <div className="statusCard">
            { props.todos.map(todo=> {
                if (todo.status === "OPEN"){
                    return <TodoCard key={todo.id} todo={todo}/>}
                else {
                    return null
                    }
                }
                )
            }
                </div>
            </div>
            <div class="statusContainer">
                <h2>In Progress</h2>
                <div className="statusCard">
                { props.todos.map(todo=> {
                        if (todo.status === "IN_PROGRESS"){
                            return <TodoCard key={todo.id} todo={todo}/>}
                        else {
                            return null
                        }
                    }
                )
                }
                </div>
            </div>
            <div class="statusContainer">
                <h2>Done</h2>
                { props.todos.map(todo=> {
                        if (todo.status === "DONE"){
                            return <TodoCard key={todo.id} todo={todo}/>}
                        else {
                            return null
                        }
                    }
                )
                }
            </div>
        </div>
        </>
    )
}