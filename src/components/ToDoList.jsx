import { useState } from "react";
import "../styles/ToDoList.css";

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() == "") return;

        setTasks([...tasks, newTask]);
        setNewTask("");
    }

    function removeTask(index) {
        setTasks(tasks.filter((_, idx) => idx !== index));
    }

    return (
        <div className="to-do-list-div">
            <h1>To Do List</h1>

            <div>
                <input
                    className="add-task-text"
                    type="text"
                    placeholder="Enter the name of the task"
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button onClick={addTask} className="add-task-button">
                    Add Task
                </button>
            </div>

            <ol>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span className="task-name">{task}</span>

                        <button
                            className="delete-task-button"
                            onClick={() => removeTask(index)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default ToDoList;
