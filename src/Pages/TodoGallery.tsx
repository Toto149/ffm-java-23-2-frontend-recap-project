import {Todo} from "../Todo.ts";
import TodoCard from "../Components/TodoCard.tsx";
import "./TodoGallery.css"

export type propTodos = {

    todos: Todo[]

}
export default function TodoGallery(props: propTodos){
    return(
        <><div class="container">

            <div class="statusContainer">
                <h2>Open</h2>

            { props.todos.map(todo=> {
                if (todo.status === "OPEN"){
                    return (<div className="statusCard">
                        <TodoCard key={todo.id} todo={todo}/>
                    </div>)}
                else {
                    return null
                    }
                }
                )
            }

            </div>
            <div class="statusContainer">
                <h2>In Progress</h2>

                { props.todos.map(todo=> {
                        if (todo.status === "IN_PROGRESS"){
                            return (<div className="statusCard">
                                <TodoCard key={todo.id} todo={todo}/>
                            </div>)}
                        else {
                            return null
                        }
                    }
                )
                }

            </div>
            <div class="statusContainer">
                <h2>Done</h2>
                { props.todos.map(todo=> {
                        if (todo.status === "DONE"){
                            return (<div className="statusCard">
                                <TodoCard key={todo.id} todo={todo}/>
                            </div>
                            )}
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