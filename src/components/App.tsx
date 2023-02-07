import React, {useEffect, useState} from "react";
import {TasksProps} from "./types/types";
import {Input, Button, Checkbox, Radiogroup} from "./common"
import {v4 as uuidv4} from 'uuid';
// import {createRoot} from "react-dom/client";


import {Route, Routes,  Link} from "react-router-dom";
import {Tasks, NotFound, Profile, Login} from "./pages"

const filters = [
    {id: uuidv4(), label: "Все", value: "all"},
    {id: uuidv4(), label: "Выполненные", value: "done"},
    {id: uuidv4(), label: "Не выполненные", value: "failed"}

]

export const App = () => {

    const todoList: TasksProps[] = [
        {id: uuidv4(), label: "HTML", isDone: true},
        {id: uuidv4(), label: "CSS", isDone: true},
        {id: uuidv4(), label: "JS", isDone: false}
    ]


    const [newTask, setNewTask] = useState('')
    const [tasks, setTask] = useState(todoList)
    const [filter, setFilter] = useState("all")

    const [editedLabel, setEditedLabel] = useState('')
    const [editId, setEditedId] = useState<string | null>(null)


    const onEditStart = (id: string) => {
        setEditedId(id);
        const item = tasks.find((item) => item.id === id);
        setEditedLabel(item!.label)
    }
    const onEditEnd = () => {
        setTask((prevTasks) =>
            prevTasks.map((item) =>
                item.id === editId ? {...item, label: editedLabel} : item
            ));
        setEditedId(null)
    }


    useEffect(() => {
        setTask(JSON.parse(localStorage.getItem("tasks") ?? "[]"))
    }, []);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])
    const addTaskHandler = () => {
        if (newTask.trim() === "") {
            setNewTask("")
            return false
        }
        setTask((prevState) => [...prevState, {id: uuidv4(), isDone: false, label: newTask}])
        setNewTask("")
    }

    const removeTaskHandler = (id: string) => {
        const filterTasks = tasks.filter((task) => task.id !== id)
        setTask(filterTasks)

    }
    const editCheck = (id: string) => {
        setTask(() => [...tasks.map((task) => task.id === id ? {...task, isDone: !task.isDone,} : task)])
    }


    const filterTaskHandler = (filter: string) => {
        setFilter(filter)
    }


    return (
        <>
        <div>

            <Input value={newTask} onChange={e => setNewTask(e.target.value)}/>
            <Button onClick={addTaskHandler} children={"Добавить задачу"}/>
            <Radiogroup items={filters} value={filter} onChange={filterTaskHandler}/>
            <ul>
                {tasks
                    .filter((task) => {
                        if (filter === "all") return true
                        return filter === "done" ? task.isDone : !task.isDone
                    })
                    .map((task) =>

                        <li key={task.id}>
                            {editId === task.id ? (
                                <input
                                    onChange={(e) => setEditedLabel(e.target.value)}
                                    value={editedLabel}/>
                            ) : (<span> {task.label}  </span>)
                            }
                            <Checkbox onChange={() => editCheck(task.id)} checked={task.isDone}/>
                            {task.isDone &&
                                < Button onClick={() => removeTaskHandler(task.id)} children={"Удалить"}/>}
                            {editId !== task.id && (
                                <button onClick={() => onEditStart(task.id)}> Изменить</button>
                            )}
                            {editId === task.id && (
                                <button onClick={onEditEnd}> Сохранить</button>
                            )}

                        </li>
                    )
                }
            </ul>
            </div>

        </>
    )

}


