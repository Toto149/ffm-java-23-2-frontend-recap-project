import {Todo} from "../Todo.ts";

type propTodo = {
    todo: Todo
}
export default function TodoCard(props: propTodo){

    return(<>
            <div class="statusContainer">
                <h5>
                    {props.todo.status}
                </h5>
                <p>
                    {props.todo.description}
                </p>
            </div>
    </>
        )
}