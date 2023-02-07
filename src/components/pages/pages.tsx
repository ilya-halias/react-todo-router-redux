import {Link, Outlet, useParams} from "react-router-dom"
import {TasksProps} from "../types/types";

export const Tasks = () => {
    return(
        <div>
            <h1>MAIN</h1>
            <Link to = ""></Link>


        </div>
    )
}


export const NotFound = () => (
    <div>
        <h1>Страница не существует</h1>
        <h2> Перейдите в главное меню по ссылке:<Link to=" ">Main</Link></h2>

    </div>
);


export const Profile = () => {
    return (
        <div>
            <h1>Secret open</h1>

        </div>
    );
};

export const Login = () =>
     (
         <h2>
             <Link to="/login"></Link>Нажмите:</h2>
    )

export const TodoById = () => {
    const { id } = useParams()
    const tasks = JSON.parse(localStorage.getItem("tasks") ?? "[]")
    const task = tasks.find((task: TasksProps) => task.id === id)


return (
    <div>
        <h1>Task id : {id}</h1>
        <h2> Title: {task.value}</h2>
        <h3>isDone: {task.isDone}</h3>
    </div>
)
}
