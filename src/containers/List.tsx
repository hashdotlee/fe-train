import "./List.css";
import {useEffect, useState} from 'react';
import ListItem, { ItemType } from "../components/ListItem";

export default function List({onSetId}: any){
    const [tasks, setTasks] = useState<ItemType[]>([]);
    const [currentTask, setCurrentTask] = useState<ItemType>({
        id: "",
        title: "",
        desc: "",
        duedate: new Date().toDateString(),
        priority: 0
        });
    useEffect(() => {
        if(window.localStorage.getItem("task") != null)
            setTasks(JSON.parse(window.localStorage.getItem("task") as string));
    }, [])
    const onSubmit = () => {
        setTasks((tasks: any) => [...tasks, currentTask])
        window.localStorage.setItem("task", JSON.stringify([...tasks, currentTask]))
    }
    return (
    <div>
    <div>
        <label style={{color: "rgba(0,0,0,0.5)"}}>Nhập tiêu đề: </label>
        <input data-testid='input-test' name="task" style={{padding: "8px 16px", border: "1px solid rgba(0,0,0,0.15)", borderRadius: "8px"}} placeholder="Go to school" onChange={(ev: any) => {
            setCurrentTask((task) => ({
                ...task,
                id: String(tasks.length + 1),
                title: ev.target.value
                }))
            }}/>
        <button
data-testid='btn-add'
        style={{border: 0, padding: "8px 16px", borderRadius: "8px", background: "orange", color: "white", marginLeft: "8px"}} onClick={onSubmit}>Thêm</button>
    </div>
    <div>
    {tasks.map((item: any) => (
    <ListItem {...item} onSetId={onSetId}/>
                ))}
    </div>
    </div>
    )
}
