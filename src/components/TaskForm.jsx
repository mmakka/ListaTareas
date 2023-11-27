import { useState } from "react";
import React from 'react'

export const TaskForm = (props) => {
  console.log(props);
    const [newTaskName, setNewTaskName ] = useState("");

    const handleSubmit = (e) => {
       e.preventDefault();
        props.createNewTask(newTaskName);
        setNewTaskName("")
    };

    return(
        <form onSubmit= {handleSubmit}>
            <input type='Text'
             placeholder='ingrese la tarea'
             value = {newTaskName} 
             onChange= {(e) => setNewTaskName(e.target.value)} />
             <button>Guardar tarea</button>
        </form>
    )
}
