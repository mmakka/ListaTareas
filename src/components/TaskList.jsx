import React from 'react'
import TaskItem from './TaskItem'

export default function TaskList({tasks,toggleTask}) {
  return (
    <table>
    <thead>
        <tr>
            <th>Tareas</th>
        </tr>
    </thead>
    <tbody>
      {tasks.map(task=>(
        <TaskItem task={task} key={task.id} toggleTask={toggleTask}/>
        )
      )}
    </tbody>
</table>
  )
}
