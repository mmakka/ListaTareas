
import './App.css'
import { TaskForm } from './components/TaskForm';
import TaskList from './components/TaskList';
import { useState, useEffect } from 'react';

function App() {
  const [tasksItems ,setTaskItems]= useState([]);
;

function createNewTask(taskName){
  setTaskItems([...tasksItems, {name: taskName, done: false}])
}

const toggleTask = task =>{
  setTaskItems(
  tasksItems.map(t=>(t.name == task.name)? {...t, done : !t.done} : t));
}

const clearTasks= ()=>{
  setTaskItems(tasksItems.filter(task =>!task.done))
}

useEffect(()=>{
  let data = localStorage.getItem("task")
  if(data){
   setTaskItems(JSON.parse(data));
  }
},[])

useEffect( () =>{
  localStorage.setItem("task", JSON.stringify(tasksItems));
},[tasksItems]);

  return (
    <>
    <div>
      <h1>Lista de tareas</h1>
      </div>
      <TaskForm createNewTask={createNewTask}/>
      <TaskList tasks ={tasksItems} toggleTask={toggleTask} />
    </>
  )

}

export default App
