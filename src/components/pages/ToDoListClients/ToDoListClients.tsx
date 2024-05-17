import { useState } from 'react';
import style from './ToDoListClients.module.css'


export default function ToDoListClients(): JSX.Element {

    const [tasks, setTasks] = useState<string[]>([]);
    const [taskInput, setTaskInput] = useState('');

    const addTask = () => {
        if(taskInput.trim() !== '') {
            setTasks([...tasks, taskInput]);
            setTaskInput('');
        }
    };
    const removeTask = (index: number) => {
        const newTask = [...tasks];
        newTask.splice(index, 1);
        setTasks(newTask);
    }

    return (
    <div>
    <div className={style.containerToDo}>Имя:
        <input type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder='Enter new data'
        />
        <button onClick={addTask} className={style.btn}>Add task</button>
        </div>
        <ul className={style.ulContainer}>
            {tasks.map((task, index) => (
                <li key={index}
                    className={style.liContainer}>
                    {task}
                    <button onClick={() => removeTask(index)}
                            className={style.btn}>
                            Remove data</button>
                </li>
            ))}
        </ul>
    

    </div>
    )
}
