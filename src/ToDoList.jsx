import React, {useState} from 'react';

function ToDoList(){

    const [tasks, setTasks] = useState(["Task 1", "Task 2", "Task 3"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value)
    }

    function addTask() {

    }

    function deleteTask(index) {

    }

    function moveTaskUp(index) {

    }

    function moveTaskDown(index) {

    }

 return(
    <div className="to-do-list">
        <h1>Things I Need To Do</h1>
        <div>
            <input 
               type="text"
               placeholder="Enter a task..."
               value={newTask}
               onChange={handleInputChange}/>
               <button className='add-button' onClick={addTask}>Add</button>
        </div>

        <ol>
            {tasks.map((task, index))}
        </ol>

    </div>
 )
}

export default ToDoList